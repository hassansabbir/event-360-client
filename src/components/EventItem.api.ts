import axios from "axios";

export const getEventItems = async () => {
  return await axios.get(
    "https://nlwd-b2-assignment-5-server.vercel.app/eventItems"
  );
};

export type TEventItems = {
  _id: string;
  eventItem: string;
  itemName: string;
  imageUrl: string;
  status: string;
};
