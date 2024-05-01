import axios from "axios";

export const getRecentEvents = async () => {
  return await axios.get(
    "https://nlwd-b2-assignment-5-server.vercel.app/recent-event"
  );
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
