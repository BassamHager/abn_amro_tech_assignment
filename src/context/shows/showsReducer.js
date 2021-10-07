// types
import {
  SET_LOADING, // set loading = true
  FETCH_SHOWS_DATA, // fetch for loading homepage
  SET_GENRES_LISTS, // limit amount of shows filtered by genre & rating
  SET_SHOW_DETAILS, // show clicked show details
  CLEAR_SHOW_DETAILS, // clear show details
  SEARCH_MATCHING_SHOWS, // fetch shows where names matching search input
} from "../types";

// update the state as per the action data
const showsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case FETCH_SHOWS_DATA:
      return { ...state, showsData: payload };

    case SET_GENRES_LISTS:
      return { ...state, genreLists: payload, isLoading: false };

    case SEARCH_MATCHING_SHOWS:
      return {
        ...state,
        matchingShows: payload,
        isLoading: false,
      };

    case SET_SHOW_DETAILS:
      return { ...state, showDetails: payload, isLoading: false };

    case CLEAR_SHOW_DETAILS:
      return { showDetails: {} };

    default:
      return state;
  }
};

export default showsReducer;
