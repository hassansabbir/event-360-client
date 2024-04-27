import axios from "axios";

export const getReviews = async () => {
  return await axios.get("http://localhost:5000/reviews");
};

export type TReview = {
  _id: string;
  name: string;
  imgUrl: string;
  designation: string;
  review: string;
};
