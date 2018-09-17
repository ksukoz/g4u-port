import axios from "axios";
import {
  GET_ERRORS,
  GET_FRANCHISE,
  GET_LEAGUES,
  GET_SUBLEAGUES,
  GET_CITIES
} from "./types";

export const getFranch = () => dispatch => {
  axios.get("http://api.mygame4u.com/portal/franch").then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_FRANCHISE,
        payload: res.data.answer
      });
    }
  });
};

export const getLeagues = frId => dispatch => {
  axios.get("http://api.mygame4u.com/portal/leagues").then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_LEAGUES,
        payload: res.data.answer
      });
    }
  });
};

export const getCities = lgId => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/subleagues/${lgId}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_CITIES,
        payload: res.data.answer
      });
    }
  });
};
