import { GET_MAIN_NEWS, GET_NEWS } from "../actions/types";

const initialState = {
  news: null,
  mainNews: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_NEWS:
      return {
        ...state,
        mainNews: action.payload
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
