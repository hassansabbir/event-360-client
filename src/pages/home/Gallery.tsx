import { RiCheckFill } from "react-icons/ri";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/gallery8.png";
import gallery9 from "../../assets/gallery9.png";
import gallery10 from "../../assets/gallery10.png";

const Gallery = () => {
  return (
    <div className="py-56 flex justify-center items-center gap-24">
      <div className="w-5/12">
        <h1 className="text-6xl font-bold">Gallery</h1>
        <p className="my-8 w-full">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="space-y-2">
          <p className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            One day pas access all lecture
          </p>
          <p className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            Lunch and Snack
          </p>
          <p className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            Meet Event Speaker
          </p>
          <p className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            Front Seat
          </p>
          <p className="flex items-center gap-4">
            <span className="">
              <RiCheckFill className="text-green-500 border border-primary rounded-full" />
            </span>{" "}
            One day pas access all lecture
          </p>
        </div>
      </div>
      <div className="w-7/12">
        <div className="  flex gap-4 items-center h-72">
          <div className="space-y-4">
            <img
              className="w-[128px] h-[192px] ms-auto object-cover"
              src={gallery1}
              alt=""
            />
            <img
              className="w-[172px] h-[258px] object-cover"
              src={gallery2}
              alt=""
            />
          </div>
          <div className="space-y-4">
            <img
              className="w-[128px] h-[212px]  object-cover"
              src={gallery3}
              alt=""
            />
            <img
              className="w-[128px] h-[215px]  object-cover"
              src={gallery4}
              alt=""
            />
            <img
              className="w-[128px] h-[160px]  object-cover"
              src={gallery5}
              alt=""
            />
          </div>
          <div className="space-y-4">
            <img
              className="w-[128px] h-[171px]  object-cover"
              src={gallery6}
              alt=""
            />
            <img
              className="w-[128px] h-[172px]  object-cover"
              src={gallery7}
              alt=""
            />
            <img
              className="w-[128px] h-[192px]  object-cover"
              src={gallery8}
              alt=""
            />
          </div>
          <div className="space-y-4">
            <img
              className="w-[160px] h-[255px]  object-cover"
              src={gallery9}
              alt=""
            />
            <img
              className="w-[128px] h-[165px]  object-cover"
              src={gallery10}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
