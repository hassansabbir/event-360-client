import { RiCheckFill } from "react-icons/ri";
import { Button } from "./ui/button";

interface ServiceCardProps {
  bannerImg: string;
  title: string;
  features: string[];
}

const ServiceCard: React.FC<{ props: ServiceCardProps }> = ({ props }) => {
  const { bannerImg, title, features } = props;
  return (
    <div className="flex flex-col h-[569px]">
      <div className="w-[362px] h-[253px]">
        <img className="w-full h-[253px]" src={bannerImg} alt="" />
      </div>
      <div className="text-start items-start my-7">
        <h1 className="text-3xl mb-5">{title}</h1>
        {features?.map((f) => (
          <p className="flex items-center gap-4">
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
    </div>
  );
};

export default ServiceCard;
