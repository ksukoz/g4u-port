import {
	GET_TOUR_INFO,
	GET_SEASONS_INFO,
	GET_TOUR_NEWS,
	GET_TOUR_TABLE,
	GET_TOUR_CALENDAR,
	GET_TOUR_CALENDAR_BY_FILTER,
	GET_TOUR_STATS,
	GET_TOUR_RESULTS,
	GET_TOUR_CLUBS,
	GET_TOUR_STADIUMS,
	GET_TOUR_CONTACTS
} from '../actions/types';

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
	contacts: null
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
		case GET_TOUR_RESULTS:
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

		default:
			return state;
	}
}
