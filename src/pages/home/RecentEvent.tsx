import { TRecentEvent, getRecentEvents } from "@/components/RecentEvent.api";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper/modules";

const RecentEvent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvents,
  });

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (isError) {
    return <p className="text-white">Something went wrong</p>;
  }
  // console.log(isLoading, data);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Recent Events</h1>
      <p className="text-xl my-10 mx-auto text-center md:w-[85ch]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.data?.data?.map((e: TRecentEvent, i: number) => (
            <SwiperSlide key={i} className="bg-[#02011B]  flex flex-col">
              <img src={e?.imgUrl} alt="" />
              <div className="p-5 text-start">
                <h1 className="text-lg">{e?.eventName}</h1>
                <h3 className="text-md text-slate-600">{e?.arrangedBy}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentEvent;
