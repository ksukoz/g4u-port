import axios from "axios";
import { GET_ERRORS } from "./types";

export const sendPromo = data => dispatch => {
  axios.post("http://api.mygame4u.com/mail/lending", data).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    }
  });
};
