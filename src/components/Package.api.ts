import axios from "axios";

export const getPackages = async () => {
  return await axios.get(`${import.meta.env.VITE_SERVER_API}/packages`);
};

export type TPackage = {
  _id: string;
  packageName: string;
  price: string;
  features: string[];
};
