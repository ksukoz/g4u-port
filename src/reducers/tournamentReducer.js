import { GET_TOUR_INFO } from "../actions/types";

const initialState = {
  subLeagues: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOUR_INFO:
      return {
        ...state,
        subLeagues: action.payload
      };

    default:
      return state;
  }
}
