import axios from "axios";
import {
  GET_ERRORS,
  GET_SEASONS_INFO,
  GET_TOUR_INFO,
  GET_TOUR_NEWS,
  GET_TOUR_TABLE,
  GET_TOUR_CALENDAR,
  GET_TOUR_STATS,
  GET_TOUR_RESULTS,
  GET_TOUR_CLUBS,
  GET_TOUR_STADIUMS,
  GET_TOUR_CONTACTS
} from "./types";

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

export const getTourNews = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/news/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_NEWS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourTable = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/table/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_TABLE,
        payload: res.data.answer
      });
    }
  });
};

export const getTourCalendar = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/calendar/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_CALENDAR,
        payload: res.data.answer
      });
    }
  });
};

export const getTourStats = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/statistic/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_STATS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourResults = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/results/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_RESULTS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourClubs = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/clubs/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_CLUBS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourStadiums = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/stadiums/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_STADIUMS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourContacts = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/contacts/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_CONTACTS,
        payload: res.data.answer
      });
    }
  });
};
