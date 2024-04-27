import axios from "axios";

export const getPackages = async () => {
  return await axios.get("http://localhost:5000/packages");
};

export type TPackage = {
  _id: string;
  packageName: string;
  price: string;
  features: string[];
};
