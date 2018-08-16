import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import newsReducer from "./newsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  lang: languageReducer,
  news: newsReducer,
  errors: errorReducer
});
