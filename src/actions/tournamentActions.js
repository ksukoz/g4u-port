import axios from "axios";
import { GET_ERRORS, GET_SEASONS_INFO, GET_TOUR_INFO } from "./types";

export const getSeasonsInfo = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/seasoninfo/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_SEASONS_INFO,
        payload: res.data.answer
      });
    }
  });
};

export const getTourInfo = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/tournirs/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_INFO,
        payload: res.data.answer
      });
    }
  });
};
