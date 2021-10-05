// types
import { SET_LOADING, FETCH_FULL_DATA, SET_GENRES_LISTS } from "../types";

// update the state as per the action data
const showsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case FETCH_FULL_DATA:
      return { ...state, showsData: payload };
    case SET_GENRES_LISTS:
      return { ...state, genreLists: payload, isLoading: false };

    default:
      return state;
  }
};

export default showsReducer;
