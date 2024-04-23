import { RiCheckFill } from "react-icons/ri";

interface ServiceCardProps {
  bannerImg: string;
  title: string;
  features: string[];
}

const ServiceCard: React.FC<{ props: ServiceCardProps }> = ({ props }) => {
  const { bannerImg, title, features } = props;
  return (
    <div className="flex flex-col">
      <div className="w-[362px] h-[192px]">
        <img src={bannerImg} alt="" />
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
    </div>
  );
};

export default ServiceCard;
