import axios from "axios";

export const getReviews = async () => {
  return await axios.get(
    "https://nlwd-b2-assignment-5-server.vercel.app/reviews"
  );
};

export type TReview = {
  _id: string;
  name: string;
  imgUrl: string;
  designation: string;
  review: string;
};
