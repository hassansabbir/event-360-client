import { TEventItems } from "@/components/EventItem.api";
import { TRecentEvent } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEventItems = () => {
  const itemDetails = useLoaderData() as TRecentEvent | undefined;
  console.log(itemDetails?.data);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEventItems>();

  const onSubmit = async (data: FormEvent) => {
    const updatedData = {
      ...data,
      status: "onAir",
    };
    console.log(data);
    await fetch(
      `http://localhost:5000/new-eventItems/${itemDetails?.data?._id}`,
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
            title: `${itemDetails?.data?.itemName} has been modified.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          reset();
          navigate("/admin/manage-eventItems", { state: { from: location } });
        }
      });
  };

  return (
    <div>
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Update Event Items
      </h1>
      <p className="md:text-xl px-2 mx-auto text-center md:w-[95ch]">
        Welcome to the "Update Event Item" page! Here, you have the power to
        fine-tune the details of your event items with ease. Whether it's
        adjusting instrument names, updating descriptions, or refreshing images,
        this page empowers you to keep your event items vibrant and engaging.
        Simply select the item you wish to update, make the desired changes, and
        click "Save". Let's ensure every event item shines brightly on your
        platform!
      </p>
      <div className="bg-blue-950 md:w-[700px] p-10 rounded-3xl my-20 mx-auto">
        <h2 className="text-2xl font-semibold">Please input your details</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div>
            <label className="text-xl" htmlFor="eventName">
              Event Item No:
            </label>
            <input
              {...register("eventItem", { required: true })}
              type="text"
              defaultValue={itemDetails?.data?.eventItem}
              name="eventItem"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
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
              defaultValue={itemDetails?.data?.itemName}
              name="itemName"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
            />
            {errors.itemName && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div>
            <label className="text-xl" htmlFor="imageUrl">
              Image Url
            </label>
            <input
              {...register("imageUrl", { required: true })}
              type="text"
              defaultValue={itemDetails?.data?.imageUrl}
              name="imageUrl"
              className="rounded w-full my-2 bg-slate-500 p-3 active:border-none"
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
              Edit Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEventItems;
