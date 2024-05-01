import { TService, getServices } from "@/components/Service.api";
import ServiceCard from "@/components/ServiceSectionCard";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Swal from "sweetalert2";

type FormData = TService;

const ManageServices = () => {
  const [newFeature, setNewFeature] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);

  // console.log(features);

  const handleAddFeature = () => {
    if (newFeature.trim() !== "") {
      setFeatures((prevFeatures) => [...prevFeatures, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (indexToRemove: number) => {
    setFeatures((prevFeatures) =>
      prevFeatures.filter((_, index) => index !== indexToRemove)
    );
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TService>();

  const { mutateAsync } = useMutation<FormData, unknown, FormData>({
    mutationFn: async (data) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_API}/add-services`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add service");
        }

        const responseData: TService = await response.json();

        // console.log(responseData);

        if (responseData) {
          console.log(responseData);
          Swal.fire({
            title: "Success",
            text: "New Service Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }

        reset();
        refetch();
        setNewFeature("");
        setFeatures([]);

        return responseData;
      } catch (error) {
        console.error("Error adding service:", error);
        throw error;
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const newAddedData = {
      ...formData,
      features: features,
      status: "onAir",
    };
    console.log(newAddedData);
    await mutateAsync(newAddedData);
  };

  const services = data?.data?.data;

  if (isLoading) {
    return <span>loadinggg</span>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }

  const handleDelete = (service: TService) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_API}/services/${service?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: `${service?.title} is Deleted.`,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          });
      }
    });
  };

  return (
    <div className="md:w-[1240px] mx-auto">
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Services
      </h1>
      <p className="md:text-xl px-2 mx-auto text-center md:w-[95ch]">
        Welcome to the 'Services' page of your admin dashboard! Here, you have
        the power to manage all the services offered on your website with ease.
        From introducing new services to updating existing ones and ensuring
        that your offerings align perfectly with your audience's needs, this
        page serves as your command center for delivering exceptional value.
        Let's craft unforgettable experiences together!
      </p>
      <div className="bg-indigo-950 md:mx-20 my-20 rounded-3xl p-10">
        <h1 className="text-3xl">Add a Service</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div>
            <label className="text-xl" htmlFor="title">
              Title:
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.title && (
              <span className="text-red-600">Title By is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="bannerImg">
              Banner Image:
            </label>
            <input
              {...register("bannerImg", { required: true })}
              type="text"
              name="bannerImg"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.bannerImg && (
              <span className="text-red-600">Banner Image URL is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="description">
              description
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              name="description"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.description && (
              <span className="text-red-600">Description is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="features">
              Features:
            </label>
            <div className="relative">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Enter a feature"
                className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-transparent border-none cursor-pointer"
              >
                <MdAdd className="w-6 h-6 me-1 " />
              </button>
            </div>
          </div>
          {/* List of features */}
          <div>
            <ul className="p-5 bg-indigo-900 my-5 rounded-3xl">
              <h2 className="my-5 text-2xl">
                {" "}
                {features.length ? (
                  <p>Features:</p>
                ) : (
                  <p>Please add some Features</p>
                )}
              </h2>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center my-2 justify-between bg-slate-600 rounded-full py-2 px-5"
                >
                  <p>
                    <span className="me-2">{index + 1}</span>
                    {feature}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="ml-2 text-red-600"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button
              className="w-full text-black h-12 rounded-none text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo"
              type="submit"
            >
              Add Service
            </Button>
          </div>
        </form>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {services?.map((service: TService, index: number) => (
          <div key={index} className="bg-slate-900 p-5 rounded-2xl">
            <ServiceCard props={service} />
            <div className="flex items-center my-4 justify-center gap-5">
              <button>
                <FaEdit className="w-7 h-7" />
              </button>
              <button onClick={() => handleDelete(service)}>
                <FaTrash className="w-7 h-7 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
