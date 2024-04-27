import axios from "axios";

export const getRecentEvents = async () => {
  return await axios.get("http://localhost:5000/recent-event");
};

export type TRecentEvent = {
  _id: string;
  imgUrl: string;
  eventName: number;
  arrangedBy: string;
};
