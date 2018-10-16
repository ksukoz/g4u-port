import axios from "axios";
import {
  GET_ERRORS,
  GET_SEASONS_INFO,
  GET_TOUR_INFO,
  GET_TOUR_NEWS,
  GET_TOUR_TABLE,
  GET_TOUR_CALENDAR,
  GET_TOUR_CALENDAR_BY_FILTER,
  GET_TOUR_STATS,
  GET_FILTERED_STATS,
  GET_TOUR_RESULTS,
  GET_TOUR_RESULTS_BY_FILTER,
  GET_TOUR_CLUBS,
  GET_TOUR_STADIUMS,
  GET_TOUR_CONTACTS,
  GET_TOUR_GAME,
  GET_TOUR_GAME_COMPOSITION,
  GET_TOUR_GAME_MEDIA,
  GET_TOUR_GAME_EVENTS,
  GET_TOUR_PLAYER,
  GET_TOUR_COMMAND,
  GET_TOUR_TEAM,
  GET_TOUR_COMMAND_CALENDAR,
  GET_TOUR_COMMAND_RESULT
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
  axios.get(`http://api.mygame4u.com/portal/newssub/${id}`).then(res => {
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

export const getFilteredCalendar = (id, stadId, comId, tour) => dispatch => {
  axios
    .get(
      `http://api.mygame4u.com/portal/calendar/${id}?${stadId}&${comId}&${tour}`
    )
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_TOUR_CALENDAR_BY_FILTER,
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

export const getFilteredStats = (
  id,
  name,
  comId,
  posId,
  limit,
  offset,
  order,
  up
) => dispatch => {
  axios
    .get(
      `http://api.mygame4u.com/portal/statistic/${id}?${name}&${comId}&${posId}&${limit}&${offset}&${order}&${up}`
    )
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_FILTERED_STATS,
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

export const getFilteredResults = (id, stadId, comId, tour) => dispatch => {
  axios
    .get(
      `http://api.mygame4u.com/portal/results/${id}?${stadId}&${comId}&${tour}`
    )
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_TOUR_RESULTS_BY_FILTER,
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

export const getTourGame = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/game/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_GAME,
        payload: res.data.answer
      });
    }
  });
};

export const getTourGameComposition = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/gameconsist/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_GAME_COMPOSITION,
        payload: res.data.answer
      });
    }
  });
};

export const getTourGameMedia = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/gamemedia/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_GAME_MEDIA,
        payload: res.data.answer
      });
    }
  });
};

export const getTourGameEvents = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/gameevents/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_GAME_EVENTS,
        payload: res.data.answer
      });
    }
  });
};

export const getTourPlayer = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/player/${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_PLAYER,
        payload: res.data.answer
      });
    }
  });
};

export const getTourCommand = id => dispatch => {
  axios.get(`http://api.mygame4u.com/portal/command?id=${id}`).then(res => {
    if (res.data.error) {
      dispatch({
        type: GET_ERRORS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: GET_TOUR_COMMAND,
        payload: res.data.answer
      });
    }
  });
};

export const getTourTeam = id => dispatch => {
  axios
    .get(`http://api.mygame4u.com/portal/commandconsist?id=${id}`)
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_TOUR_TEAM,
          payload: res.data.answer
        });
      }
    });
};

export const getTourCommandCalendar = id => dispatch => {
  axios
    .get(`http://api.mygame4u.com/portal/commandcalendar?id=${id}`)
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_TOUR_COMMAND_CALENDAR,
          payload: res.data.answer
        });
      }
    });
};

export const getTourCommandResults = id => dispatch => {
  axios
    .get(`http://api.mygame4u.com/portal/commandresult?id=${id}`)
    .then(res => {
      if (res.data.error) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_TOUR_COMMAND_RESULT,
          payload: res.data.answer
        });
      }
    });
};
