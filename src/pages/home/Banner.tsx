import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import bannerImg from "../../assets/bannerImg.png";
import { TService, getServices } from "@/components/Service.api";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

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

  // console.log({ isLoading, data });

  const titleText = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const bgImg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backGroundPosition: "center",
  };

  return (
    <div className="md:flex gap-6">
      <div
        style={bgImg}
        className="text-white md:w-[736px] md:h-[708px] flex items-end"
      >
        <div>
          <div className="bg-gradient-to-t from-black pt-40 md:px-10 px-4 pb-10">
            <motion.h1
              variants={titleText}
              initial="hidden"
              animate="visible"
              className="md:text-5xl text-2xl font-semibold mb-3"
            >
              New Packages For Winter
            </motion.h1>
            <motion.p
              variants={titleText}
              initial="hidden"
              animate="visible"
              className="md:text-lg text-sm"
            >
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="text-white md:p-10 md:w-[520px]">
        <h1 className="font-bold border-b-2 border-[#344E71] text-2xl pb-6 text-center">
          OUR MOST POPULAR SERVICES
        </h1>
        <div className="h-[600px]">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {data?.data?.data?.map((item: TService, index: number) => (
              <SwiperSlide key={index} className="flex flex-col p-10 ">
                <ServiceCard props={item} />
                <div className="w-full md:mt-auto">
                  <Button className="w-full text-black h-12 rounded-none text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
                    View Details
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
