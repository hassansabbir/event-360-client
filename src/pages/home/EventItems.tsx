import { TEventItems, getEventItems } from "@/components/EventItem.api";
import { useQuery } from "@tanstack/react-query";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EventItems = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const style = {
    scale: useTransform(scrollYProgress, [0, 1], [0.3, 1]),
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["eventItems"],
    queryFn: getEventItems,
  });

  if (isLoading) {
    return <p className="text-white">loadingggg.....</p>;
  }
  if (isError) {
    return <p className="text-white">Something wwwent wrong</p>;
  }
  // console.log(isLoading, data);

  return (
    <div className="md:px-32">
      <div className="text-center">
        <h1 className="md:text-6xl font-bold">Event Items</h1>
        <p className="text-xl md:w-[70ch] mx-auto my-7">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {data?.data?.data?.map((item: TEventItems, i: number) => (
          <motion.div
            style={style}
            ref={componentRef}
            key={i}
            className="p-5 bg-black rounded-xl"
          >
            <h1 className="text-2xl mb-3 font-bold">
              Event Item - {item?.eventItem}
            </h1>
            <img
              className="w-[292px] h-[196px] object-cover"
              src={item?.imageUrl}
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventItems;
