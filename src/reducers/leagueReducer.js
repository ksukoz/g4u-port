import { GET_FRANCHISE, GET_LEAGUES, GET_SUBLEAGUES } from "../actions/types";

const initialState = {
  franch: null,
  leagues: null,
  subLeagues: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FRANCHISE:
      return {
        ...state,
        franch: action.payload
      };
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.payload
      };
    case GET_SUBLEAGUES:
      return {
        ...state,
        subLeagues: action.payload
      };
    default:
      return state;
  }
}
