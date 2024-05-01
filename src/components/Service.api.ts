import axios from "axios";

export const getServices = async () => {
  return await axios.get(`${import.meta.env.VITE_SERVER_API}/services`);
};

export type TService = {
  _id: string;
  bannerImg: string;
  title: string;
  description: string;
  features: string[];
};
