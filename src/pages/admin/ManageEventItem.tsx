import { TEventItems, getEventItems } from "@/components/EventItem.api";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type FormData = TEventItems;

const ManageEventItem = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["eventItems"],
    queryFn: getEventItems,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEventItems>();

  const { mutateAsync } = useMutation<FormData, unknown, FormData>({
    mutationFn: async (data) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_API}/eventItems`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add event item");
        }

        const responseData = await response.json();

        if (responseData.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Event Item Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }

        reset();
        refetch();

        // Return the original data if the API call doesn't return any data
        return data;
      } catch (error) {
        console.error("Error adding event item:", error);
        // Rethrow the error to be caught by the caller
        throw error;
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const newAddedData = {
      ...formData,
      status: "onAir",
    };
    await mutateAsync(newAddedData);
  };

  const eventItems = data?.data?.data;

  if (isLoading) {
    return <span>loadinggg</span>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }
  // console.log(isLoading, data);

  const handleDelete = (item: TEventItems) => {
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
        fetch(`${import.meta.env.VITE_SERVER_API}/eventItems/${item?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: `${item?.itemName} is Deleted.`,
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
    <div>
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Event Items
      </h1>
      <p className="md:text-xl px-2 mx-auto text-center md:w-[95ch]">
        Welcome to the 'Event Items' page of your admin dashboard! Here, you
        have full control over the instruments and event items featured on your
        website. Whether it's adding new instruments, updating existing event
        items, or removing outdated listings, this page is your go-to
        destination for curating an exceptional experience for your audience.
        Let's showcase the best of what you have to offer!
      </p>
      <div className="bg-indigo-950 md:mx-20 my-20 rounded-3xl p-10">
        <h1 className="text-3xl">Add an Item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div>
            <label className="text-xl" htmlFor="eventName">
              Event Item No:
            </label>
            <input
              {...register("eventItem", { required: true })}
              type="text"
              readOnly
              defaultValue={eventItems?.length + 1}
              name="eventItem"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.eventItem && (
              <span className="text-red-600">Arranged By is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="eventName">
              Item Name:
            </label>
            <input
              {...register("itemName", { required: true })}
              type="text"
              name="itemName"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.itemName && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="eventName">
              Image Url
            </label>
            <input
              {...register("imageUrl", { required: true })}
              type="text"
              name="imageUrl"
              className="rounded w-full my-1 bg-slate-500 p-2 active:border-none"
            />
            {errors.imageUrl && (
              <span className="text-red-600">Image is required</span>
            )}
          </div>

          <div className="mt-6">
            <Button
              className="w-full text-black h-12 rounded-none text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo"
              type="submit"
            >
              Add Item
            </Button>
          </div>
        </form>
      </div>
      <div className="grid gap-5 px-10 grid-cols-1 md:grid-cols-4">
        {eventItems?.map((item: TEventItems, index: number) => (
          <div key={index} className="bg-indigo-950 rounded-2xl p-3">
            <img
              className="w-full rounded-2xl md:h-[220px]"
              src={item?.imageUrl}
              alt=""
            />
            <h1 className="text-2xl my-2 font-semibold">
              {item?.eventItem} {item?.itemName}
            </h1>
            <div className="flex items-center my-4 justify-center gap-5">
              <Link to={`/admin/manage-eventItems/updateEvent/${item?._id}`}>
                <button>
                  <FaEdit className="w-7 h-7" />
                </button>
              </Link>
              <button onClick={() => handleDelete(item)}>
                <FaTrash className="w-7 h-7 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEventItem;
