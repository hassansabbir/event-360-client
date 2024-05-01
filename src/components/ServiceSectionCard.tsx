import { RiCheckFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  bannerImg: string;
  title: string;
  features: string[];
}

const ServiceCard: React.FC<{ props: ServiceCardProps }> = ({ props }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const style = {
    scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
  };

  const { bannerImg, title, features } = props;
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="flex flex-col h-[569px]"
    >
      <div className="md:w-[362px] md:h-[253px]">
        <img className="w-full h-[253px]" src={bannerImg} alt="" />
      </div>
      <div className="text-start items-start my-7">
        <h1 className="text-3xl mb-5">{title}</h1>
        {features?.map((f, i: number) => (
          <p key={i} className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            {f}
          </p>
        ))}
      </div>
      <div className="w-full mt-auto">
        <Button className="w-full text-black h-12 rounded-none text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
          Check It Out
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
