import { SET_LANGUAGE } from "../actions/types";

import messages from "../messages";

const initialState = {
  locale:
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    "en-US",
  messages: messages
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        locale: action.payload
      };
    default:
      return state;
  }
}
