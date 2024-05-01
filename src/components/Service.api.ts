import axios from "axios";

export const getServices = async () => {
  return await axios.get(
    "https://nlwd-b2-assignment-5-server.vercel.app/services"
  );
};

export type TService = {
  _id: string;
  bannerImg: string;
  title: string;
  description: string;
  features: string[];
};
