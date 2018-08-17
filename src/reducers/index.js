import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import leagueReducer from "./leagueReducer";
import newsReducer from "./newsReducer";
import statsReducer from "./statsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  lang: languageReducer,
  leagues: leagueReducer,
  news: newsReducer,
  errors: errorReducer,
  stats: statsReducer
});
