import axios from "axios";

export const getPackages = async () => {
  return await axios.get(
    "https://nlwd-b2-assignment-5-server.vercel.app/packages"
  );
};

export type TPackage = {
  _id: string;
  packageName: string;
  price: string;
  features: string[];
};
