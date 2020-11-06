import { GET_IMAGES } from "../actions/types";
const initialState = {
  images: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    default:
      return state;
  }
}
