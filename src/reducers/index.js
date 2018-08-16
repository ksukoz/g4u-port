import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import newsReducer from "./newsReducer";
import statsReducer from "./statsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  lang: languageReducer,
  news: newsReducer,
  errors: errorReducer,
  stats: statsReducer
});
