import { TRecentEvent } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateRecentEvent = () => {
  const eventDetails = useLoaderData() as TRecentEvent | undefined;
  // console.log(eventDetails?.data);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRecentEvent>();

  const onSubmit = async (data: FormEvent) => {
    const updatedData = {
      ...data,
      status: "onAir",
    };
    await fetch(
      `http://localhost:5000/full-recent-event/${eventDetails?.data?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire({
            title: `${eventDetails?.data?.eventName} has been modified.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          reset();
          navigate("/admin/manage-recentEvents", { state: { from: location } });
        }
      });
  };

  return (
    <div>
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Update Events
      </h1>
      <p className="md:text-xl px-2 mx-auto text-center md:w-[95ch]">
        Welcome to the "Update Recent Event" page! Here, you can effortlessly
        edit the details of your recent events. Simply select the event you wish
        to update, make the desired changes, and click "Save". It's that easy!
        Keep your event listings up-to-date and engaging for your audience.
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
              defaultValue={eventDetails?.data?.eventName}
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
              defaultValue={eventDetails?.data?.imgUrl}
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
              defaultValue={eventDetails?.data?.arrangedBy}
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
              Edit Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecentEvent;
