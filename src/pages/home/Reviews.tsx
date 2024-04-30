import { TReview, getReviews } from "@/components/Revires.api";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Reviews = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }
  // console.log(isLoading, data);

  return (
    <div className="py-20">
      <h1 className="text-6xl">What everyone says</h1>
      <div className="my-14">
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          {data?.data?.data?.map((item: TReview, i: number) => (
            <SwiperSlide key={i}>
              <div className="bg-[#02011B] flex flex-col p-10 text-left w-[412px] h-[330px]">
                <p className="text-xl ">{item?.review}</p>
                <div className="flex gap-5 mt-auto">
                  <div className="w-16 h-16 rounded-full">
                    <img className="rounded-full" src={item?.imgUrl} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl">{item?.name}</h3>
                    <h3 className="text-slate-600">{item?.designation}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
