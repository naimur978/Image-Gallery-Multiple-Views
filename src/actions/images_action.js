import { GET_IMAGES } from "./types";
import { images } from "../utils/data";

// Get Images
export const getImages = () => {
  return {
    type: GET_IMAGES,
    payload: images
  };
};
