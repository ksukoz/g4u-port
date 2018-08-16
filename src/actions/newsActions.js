import axios from "axios";
import { GET_ERRORS, GET_NEWS } from "./types";

export const getNews = () => dispatch => {
  axios.get("http://api.afl.lan/portal/news").then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_NEWS,
        payload: res.data.answer
      });
    }
  });
};
