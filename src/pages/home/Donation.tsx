import { Button } from "@/components/ui/button";
import palestine from "../../assets/palestine.jpg";
import { RiRefund2Fill } from "react-icons/ri";

const Donation = () => {
  return (
    <div className="flex items-center my-20 rounded-3xl gap-10 bg-slate-900 px-5 py-20">
      <div className="p-2 rounded-3xl bg-slate-500">
        <img
          className="w-[400px] h-[400px] rounded-3xl"
          src={palestine}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl font bold">
          Stand with Gaza <br /> Support Hope, Rebuild Lives
        </h1>
        <p className="text-xl my-10 w-[60ch]">
          In the face of adversity, solidarity shines brightest. Join us in
          standing with Gaza, where every donation becomes a lifeline of hope.
          Your support helps rebuild homes, provide essential medical care, and
          create opportunities for a brighter future. Together, let's make a
          difference and bring hope to those who need it most. Donate today and
          stand with Gaza.
        </p>
        <div className="">
          <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
            <RiRefund2Fill className="w-6 h-6 me-1" /> Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
