import { TService, getServices } from "@/components/Service.api";
import ServiceSectionCard from "@/components/ServiceSectionCard";
import { useQuery } from "@tanstack/react-query";

const ServicesSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }

  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-6xl">Our Services</h1>
        <p className="text-lg mx-auto my-6 w-[70ch]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
        {data?.data.data.map((item: TService) => (
          <div className="bg-[#02011B] rounded-lg p-5">
            <ServiceSectionCard props={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
