import { TRecentEvent } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const AddRecentEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRecentEvent>();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch(
        "https://nlwd-b2-assignment-5-server.vercel.app/recent-event",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "New Event Added Successfully",
              icon: "success",
              confirmButtonText: "Done",
            });
          }
          reset();
          navigate("/admin/manage-recentEvents", { state: { from: location } });
        });
    },
  });

  // console.log(isError, isSuccess);

  const onSubmit = async (data: FormEvent) => {
    const newAddedData = {
      ...data,
      status: "onAir",
    };
    await mutateAsync(newAddedData);
  };

  return (
    <div>
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Add an Event
      </h1>
      <p className="md:text-xl px-2 mx-auto text-center md:w-[100ch]">
        Welcome to 'Add Recent Event'! Here, you can swiftly add new events to
        your website. Just input some details and voila! Your event is ready to
        captivate your audience. Let's make every event count!
      </p>
      <div className="bg-blue-950 md:w-[700px] p-10 rounded-3xl my-20 mx-auto">
        <h2 className="text-2xl font-semibold">Please input your details</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div>
            <label className="text-xl" htmlFor="eventName">
              Event Name:
            </label>
            <input
              {...register("eventName", { required: true })}
              type="text"
              name="eventName"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
            />
            {errors.eventName && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="eventName">
              Image Url
            </label>
            <input
              {...register("imgUrl", { required: true })}
              type="text"
              name="imgUrl"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
            />
            {errors.imgUrl && (
              <span className="text-red-600">Image is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="eventName">
              Arranged By:
            </label>
            <input
              {...register("arrangedBy", { required: true })}
              type="text"
              name="arrangedBy"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
            />
            {errors.arrangedBy && (
              <span className="text-red-600">Arranged By is required</span>
            )}
          </div>
          <div className="mt-6">
            <Button
              className="w-full text-black h-12 rounded-none text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo"
              type="submit"
            >
              Add an Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecentEvent;
