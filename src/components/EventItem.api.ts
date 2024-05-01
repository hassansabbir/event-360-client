import axios from "axios";

export const getEventItems = async () => {
  return await axios.get(`${import.meta.env.VITE_SERVER_API}/eventItems`);
};

export type TEventItems = {
  _id: string;
  eventItem: string;
  itemName: string;
  imageUrl: string;
  status: string;
};
