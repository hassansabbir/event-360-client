import { TEventItems, getEventItems } from "@/components/EventItem.api";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const ManageEventItem = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["eventItems"],
    queryFn: getEventItems,
  });

  const eventItems = data?.data?.data;

  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }
  console.log(isLoading, data);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center my-10">Event Items</h1>
      <p className="text-xl mx-auto text-center md:w-[95ch]">
        Welcome to the 'Event Items' page of your admin dashboard! Here, you
        have full control over the instruments and event items featured on your
        website. Whether it's adding new instruments, updating existing event
        items, or removing outdated listings, this page is your go-to
        destination for curating an exceptional experience for your audience.
        Let's showcase the best of what you have to offer!
      </p>
      <div className="text-center my-10">
        <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
          <MdAdd className="w-6 h-6 me-1" /> Add an Event Item
        </Button>
      </div>
      <div className="grid gap-5 px-10 grid-cols-1 md:grid-cols-4">
        {eventItems?.map((item: TEventItems) => (
          <div className="bg-indigo-950 rounded-2xl p-3">
            <img
              className="w-full rounded-2xl md:h-[220px]"
              src={item?.imageUrl}
              alt=""
            />
            <h1 className="text-2xl my-2 font-semibold">
              {item?.eventItem} {item?.itemName}
            </h1>
            <div className="flex items-center my-4 justify-center gap-5">
              <button>
                <FaEdit className="w-7 h-7" />
              </button>
              <button>
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
