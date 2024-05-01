import { TRecentEvent } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type FormData = TRecentEvent;

const AddRecentEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRecentEvent>();

  const { mutateAsync } = useMutation<FormData, unknown, FormData>({
    mutationFn: async (data) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_API}/recent-event`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add recent event");
        }

        const responseData = await response.json();

        if (responseData.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Event Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }

        reset();
        navigate("/admin/manage-recentEvents", { state: { from: location } });

        return data;
      } catch (error) {
        console.error("Error adding recent event:", error);

        throw error;
      }
    },
  });

  // console.log(isError, isSuccess);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const { _id, imgUrl, eventName, arrangedBy } = formData;
    const newAddedData = {
      _id,
      imgUrl,
      eventName, // Should be of type string
      arrangedBy,
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
