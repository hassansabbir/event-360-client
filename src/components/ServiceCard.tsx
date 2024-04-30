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
      <div className="md:w-[362px] md:h-[192px]">
        <img src={bannerImg} alt="" />
      </div>
      <div className="text-start items-start my-7">
        <h1 className="md:text-3xl text-xl mb-5">{title}</h1>
        {features?.map((f, i: number) => (
          <p key={i} className="flex text-sm items-center gap-4">
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
