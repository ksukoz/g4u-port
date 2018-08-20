import { GET_MAIN_NEWS, GET_NEWS, GET_CURRENT_NEWS } from "../actions/types";

const initialState = {
  news: null,
  mainNews: null,
  currentNews: null
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
    case GET_CURRENT_NEWS:
      return {
        ...state,
        currentNews: action.payload
      };
    default:
      return state;
  }
}
