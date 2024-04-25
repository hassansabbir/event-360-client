import axios from "axios";

export const getEventItems = async () => {
  return await axios.get("http://localhost:5000/eventItems");
};

export type TEventItems = {
  _id: string;
  eventItem: number;
  itemName: string;
  imageUrl: string;
};
