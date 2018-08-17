import axios from "axios";
import { GET_ERRORS, GET_STATS } from "./types";

export const getStats = () => dispatch => {
  axios.get("http://api.mygame4u.com/portal/count").then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_STATS,
        payload: res.data.answer
      });
    }
  });
};
