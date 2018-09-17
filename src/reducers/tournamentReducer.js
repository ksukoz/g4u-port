import { GET_TOUR_INFO, GET_SEASONS_INFO } from "../actions/types";

const initialState = {
  subLeagues: null,
  tournament: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS_INFO:
      return {
        ...state,
        subLeagues: action.payload
      };
    case GET_TOUR_INFO:
      return {
        ...state,
        tournament: action.payload
      };

    default:
      return state;
  }
}
