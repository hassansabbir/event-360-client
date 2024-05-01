import axios from "axios";

export const getReviews = async () => {
  return await axios.get(`${import.meta.env.VITE_SERVER_API}/reviews`);
};

export type TReview = {
  _id: string;
  name: string;
  imgUrl: string;
  designation: string;
  review: string;
};
