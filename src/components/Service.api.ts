import axios from "axios";

export const getServices = async () => {
  return await axios.get("http://localhost:5000/services");
};

export type TService = {
  _id: string;
  bannerImg: string;
  title: string;
  description: string;
  features: string[];
};
