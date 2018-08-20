import axios from "axios";
import { GET_ERRORS, GET_NEWS, GET_MAIN_NEWS, GET_CURRENT_NEWS } from "./types";

export const getMainNews = () => dispatch => {
  axios.get("http://api.mygame4u.com/portal/news").then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_MAIN_NEWS,
        payload: res.data.answer
      });
    }
  });
};

export const getNews = data => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/news?${data}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      res.data.answer.length === 0
        ? dispatch({
            type: GET_NEWS,
            payload: null
          })
        : dispatch({
            type: GET_NEWS,
            payload: res.data.answer
          });
    }
  });
};
export const getCurrentNews = data => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/news?nId=${data}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_CURRENT_NEWS,
        payload: res.data.answer
      });
    }
  });
};
