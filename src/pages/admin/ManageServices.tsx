import { TService, getServices } from "@/components/Service.api";
import ServiceCard from "@/components/ServiceSectionCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const ManageServices = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const services = data?.data?.data;

  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }

  return (
    <div className="md:w-[1240px] mx-auto">
      <h1 className="text-6xl font-bold text-center my-10">Recent Events</h1>
      <p className="text-xl mx-auto text-center w-[95ch]">
        Welcome to the 'Services' page of your admin dashboard! Here, you have
        the power to manage all the services offered on your website with ease.
        From introducing new services to updating existing ones and ensuring
        that your offerings align perfectly with your audience's needs, this
        page serves as your command center for delivering exceptional value.
        Let's craft unforgettable experiences together!
      </p>
      <div className="text-center my-10">
        <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
          <MdAdd className="w-6 h-6 me-1" /> Add a Service
        </Button>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {services?.map((service: TService) => (
          <div className="bg-slate-900 p-5 rounded-2xl">
            <ServiceCard props={service} />
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

export default ManageServices;
