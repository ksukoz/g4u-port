import { combineReducers } from "redux";
import languageReducer from "./languageReducer";

export default combineReducers({
  lang: languageReducer
});
