import axios from "axios";

export const getRecentEvents = async () => {
  return await axios.get(`${import.meta.env.VITE_SERVER_API}/recent-event`);
};

export type TRecentEvent = {
  _id: string;
  imgUrl: string;
  eventName: number;
  arrangedBy: string;
  status: string;
};
export type TRecentEventPost = {
  eventName: number;
  imgUrl: string;
  arrangedBy: string;
  status: string;
};
