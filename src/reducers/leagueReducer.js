import {
  GET_FRANCHISE,
  GET_LEAGUES,
  GET_SUBLEAGUES,
  GET_CITIES
} from "../actions/types";

const initialState = {
  franch: null,
  leagues: null,
  subLeagues: null,
  tournaments: null
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
    case GET_CITIES:
      return {
        ...state,
        tournaments: action.payload
      };
    default:
      return state;
  }
}
