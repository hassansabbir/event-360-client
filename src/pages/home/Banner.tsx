import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import bannerImg from "../../assets/bannerImg.png";
import { TService, getServices } from "@/components/Service.api";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";
import { RiCheckFill } from "react-icons/ri";

const Banner = () => {
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

  console.log({ isLoading, data });
  const bgImg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backGroundPosition: "center",
  };

  return (
    <div className="flex gap-6">
      <div
        style={bgImg}
        className="text-white w-[736px] h-[708px] flex items-end"
      >
        <div className="bg-gradient-to-t from-black pt-40 px-10 pb-10">
          <h1 className="text-5xl font-semibold mb-3">
            New Packages For Winter
          </h1>
          <p className="text-lg">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
      </div>
      <div className="text-white p-10 w-[520px]">
        <h1 className="font-bold border-b-2 border-[#344E71] text-2xl pb-6 text-center">
          OUR MOST POPULAR SERVICES
        </h1>
        <div>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {data?.data?.data?.map((item: TService) => (
              <SwiperSlide className="flex flex-col p-10">
                <>
                  <div className="w-[362px] h-[192px]">
                    <img src={item.bannerImg} alt="" />
                  </div>
                  <div className="text-start items-start my-7">
                    <h1 className="text-3xl mb-5">{item.title}</h1>
                    {item?.features?.map((f) => (
                      <p className="flex items-center gap-4">
                        <span className="">
                          <RiCheckFill className="text-green-500 border border-primary rounded-full" />
                        </span>{" "}
                        {f}
                      </p>
                    ))}
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
