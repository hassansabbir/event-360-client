import { TPackage, getPackages } from "@/components/Package.api";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { RiCheckFill } from "react-icons/ri";

const Pricing = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });

  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }
  // console.log(isLoading, data);

  return (
    <div>
      <h5 className="text-xl text-center">PRICING</h5>
      <h1 className="text-6xl font-bold my-5 text-center">Package Pricing</h1>
      <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-3">
        {data?.data?.data?.map((p: TPackage, i: number) => (
          <div
            key={i}
            className="bg-gray-900 hover:bg-[#0038B4] flex flex-col p-14 rounded-lg"
          >
            <div>
              <h1 className="text-xl uppercase">{p?.packageName}</h1>
              <h1 className="text-[40px] font-bold my-5">${p?.price}</h1>
              <div className="my-5">
                {p?.features?.map((i, index: number) => (
                  <p key={index} className="flex items-center gap-4">
                    <span className="text-xl my-2">
                      <RiCheckFill className="text-green-500 border border-primary rounded-full" />
                    </span>
                    {i}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full mt-auto">
              <Button className="mt-10 py-7 bg-slate-800 w-full hover:text-black hover:bg-gradient-to-r from-gradientFrom to-gradientTo">
                Get Your Ticket
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
