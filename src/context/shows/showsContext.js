import { createContext, useReducer, useCallback } from "react";

// types
import { SET_LOADING, FETCH_FULL_DATA, SET_GENRES_LISTS } from "../types";

// reducer
import showsReducer from "./showsReducer";

// mock data
import mockData from "../mockData.json";

export const ShowsContext = createContext();

export const ShowsState = ({ children }) => {
  // initial state
  const initialState = { data: [], genreRows: {}, isLoading: false };

  // updated state
  const [state, dispatch] = useReducer(showsReducer, initialState);

  // fetch full data to update state
  const fetchFullData = useCallback(async () => {
    try {
      // fetch url
      // const fetchedData = await fetch(process.env.REACT_APP_FULL_DATA_ENDPOINT);

      // update state
      dispatch({ type: FETCH_FULL_DATA, payload: mockData });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // filter shows by 1st found genre & update state accordingly
  const fetchShowsLists = useCallback(async () => {
    try {
      // update loading status
      dispatch({ type: SET_LOADING });

      // fetch full data
      fetchFullData();

      // reduce shows data into an object its key = genre , value = whole show object
      const genresObj = state.data.reduce((acc, cur) => {
        const genres = cur?._embedded?.show?.genres;
        console.log(genres);
        const genre = genres && genres.length > 0 ? genres[0] : "unknown";
        genre in acc ? acc[genre].push(cur) : (acc[genre] = [cur]);
        return acc;
      }, {});

      // update state
      dispatch({ type: SET_GENRES_LISTS, payload: genresObj });
    } catch (error) {
      console.log(error);
    }
  }, [state.data, fetchFullData]);

  // return provider tags loaded with desired data to surround the components that need this data
  return (
    <ShowsContext.Provider
      value={{
        fetchShowsLists,
        genreRows: state.genreRows,
        loading: state.isLoading,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};
