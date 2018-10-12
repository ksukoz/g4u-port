import {
  GET_TOUR_INFO,
  GET_SEASONS_INFO,
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
  GET_TOUR_PLAYER,
  GET_TOUR_COMMAND,
  GET_TOUR_TEAM,
  GET_TOUR_COMMAND_CALENDAR,
  GET_TOUR_COMMAND_RESULT
} from "../actions/types";

const initialState = {
  subLeagues: null,
  tournament: null,
  news: null,
  table: null,
  calendar: null,
  stats: null,
  results: null,
  clubs: null,
  stadiums: null,
  contacts: null,
  game: null,
  compoition: null,
  media: null,
  player: null,
  command: null,
  team: null,
  commandCalendar: null,
  commandResult: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS_INFO:
      return {
        ...state,
        subLeagues: action.payload
      };
    case GET_TOUR_INFO:
      return {
        ...state,
        tournament: action.payload
      };
    case GET_TOUR_NEWS:
      return {
        ...state,
        news: action.payload
      };
    case GET_TOUR_TABLE:
      return {
        ...state,
        table: action.payload
      };
    case GET_TOUR_CALENDAR:
      return {
        ...state,
        calendar: action.payload
      };
    case GET_TOUR_CALENDAR_BY_FILTER:
      return {
        ...state,
        calendar: action.payload
      };
    case GET_TOUR_STATS:
      return {
        ...state,
        stats: action.payload
      };
    case GET_FILTERED_STATS:
      return {
        ...state,
        stats: action.payload
      };
    case GET_TOUR_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case GET_TOUR_RESULTS_BY_FILTER:
      return {
        ...state,
        results: action.payload
      };
    case GET_TOUR_CLUBS:
      return {
        ...state,
        clubs: action.payload
      };
    case GET_TOUR_STADIUMS:
      return {
        ...state,
        stadiums: action.payload
      };
    case GET_TOUR_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_TOUR_GAME:
      return {
        ...state,
        game: action.payload
      };
    case GET_TOUR_GAME_COMPOSITION:
      return {
        ...state,
        composition: action.payload
      };
    case GET_TOUR_GAME_MEDIA:
      return {
        ...state,
        media: action.payload
      };
    case GET_TOUR_PLAYER:
      return {
        ...state,
        player: action.payload
      };
    case GET_TOUR_COMMAND:
      return {
        ...state,
        command: action.payload
      };
    case GET_TOUR_TEAM:
      return {
        ...state,
        team: action.payload
      };
    case GET_TOUR_COMMAND_CALENDAR:
      return {
        ...state,
        commandCalendar: action.payload
      };
    case GET_TOUR_COMMAND_RESULT:
      return {
        ...state,
        commandResult: action.payload
      };

    default:
      return state;
  }
}
