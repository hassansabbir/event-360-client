import { Button } from "@/components/ui/button";
import backgImg from "../../assets/contactBggImg.png";
import { BsFillSendFill } from "react-icons/bs";

const ContactUs = () => {
  const bgImg = {
    backgroundImage: `url(${backgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backGroundPosition: "center",
  };

  return (
    <div style={bgImg} className="my-20 rounded-3xl">
      <div className="bg-black bg-opacity-60 p-20">
        <h1 className="md:text-6xl text-2xl font-bold">Contact Us</h1>
        <h1 className="md:text-3xl my-3">
          You can get reservation through online. It is now at your fingertips!!{" "}
          <br /> For Online Request Please Fill The Form.
        </h1>
        <form>
          <div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                name="fullName"
                className="w-1/2 h-6 p-5 rounded-2xl text-black"
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-1/2 h-6 p-5 rounded-2xl text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="phoneNumber">Message:</label>
            <textarea
              name="phoneNumber"
              className="h-32 rounded-2xl p-5 text-black"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="iUnderstand"
              id=""
              className="w-5 h-5"
            />{" "}
            <p>I truly agree with everything I said.</p>
          </div>
          <div className="text-end">
            <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
              <BsFillSendFill className="w-6 h-6 me-1" /> Sent
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
