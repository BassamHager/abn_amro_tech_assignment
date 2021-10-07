import { createContext, useReducer, useCallback } from "react";

// types
import {
  SET_LOADING, // set loading = true
  FETCH_SHOWS_DATA, // fetch for loading homepage
  SET_GENRES_LISTS, // limit amount of shows filtered by genre & rating
  SET_SHOW_DETAILS, // show clicked show details
  CLEAR_SHOW_DETAILS, // clear show details
  SEARCH_MATCHING_SHOWS, // fetch shows where names matching search input
} from "../types";

// reducer
import showsReducer from "./showsReducer";

// mock data
import mockData from "../mock2.json";
import details from "../details.json";

export const ShowsContext = createContext();

export const ShowsState = ({ children }) => {
  // initial state
  const initialState = {
    showsData: [], // first homepage load fetched
    genreLists: [], // limited amount of shows filtered by genre & rating
    matchingShows: [], // all shows their names matching the search input
    showDetails: {}, // clicked show details
    isLoading: false,
  };

  // updated state
  const [state, dispatch] = useReducer(showsReducer, initialState);
  // destructure state
  const { isLoading, genreLists, matchingShows, showDetails } = state;

  // helper function: fetch full data, update state
  // const fetchFullData = useCallback(async () => {
  //   try {
  //     // fetch url - todo
  //     // const fetchedData = await fetch(process.env.REACT_APP_FULL_DATA_ENDPOINT);
  //     const fetchedData = await fetch(
  //       "https://www.youtube.com/watch?v=jiJJ2V8K1ik"
  //     );
  //     const parsedData = await fetchedData.json();

  //     // update state
  //     dispatch({ type: FETCH_SHOWS_DATA, payload: parsedData });

  //     // return parsedData;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // helper function: takes array of objects & returns a new Map its key is genre & its value is array of objects
  const filterGenreLists = useCallback((listsArray) => {
    // filter by few desired genres - select few from data - todo
    const desiredGenres = ["Action", "Comedy", "Drama"]; // update lower - todo

    try {
      const filteredListsMap = listsArray.reduce((acc, cur) => {
        const genres = cur.genres;

        // filter
        const filtered = genres?.filter((genre) =>
          desiredGenres?.includes(genre)
        );

        // accumulate
        filtered.forEach((g) => {
          acc.has(g) ? acc.get(g).push(cur) : acc.set(g, [cur]);
        });

        // return acc as a new Map()
        return acc;
      }, new Map());

      // return filtered map
      return filteredListsMap;
    } catch (error) {
      console.error(error);
    }
  }, []);

  // helper function: takes an object & returns it with values (arrays) sorted by rating & limited length to 10
  const sortAndLimitLists = useCallback((map) => {
    try {
      // limit length of lists into 10 max
      map.forEach((value, key) =>
        map.set(
          key,
          // validate lists length & sort by rating - todo
          value.sort((a, b) => b.rating.average - a.rating.average).slice(0, 10)
        )
      );

      // return sorted map
      return map;
    } catch (error) {
      console.error(error);
    }
  }, []);

  // filter shows per genre, sort by rating & update the state
  const setGenreLists = useCallback(async () => {
    try {
      // update loading status
      dispatch({ type: SET_LOADING });

      // fetch shows data
      // await fetchFullData();
      const res = await mockData;

      // filter lists per genre
      // const listsMap = filterGenreLists(mockData);
      const listsMap = filterGenreLists(res);

      // sort by rating & limit length to 10
      const sortedListsMap = Array.from(
        sortAndLimitLists(listsMap),
        ([key, value]) => [key, value]
      );

      // update state
      dispatch({ type: SET_GENRES_LISTS, payload: sortedListsMap });
    } catch (error) {
      console.error(error);
    }
  }, [filterGenreLists, sortAndLimitLists]);

  // search show
  const searchShow = useCallback(async (searchedInput) => {
    try {
      // update loading
      dispatch({ type: SET_LOADING });

      // fetch data
      const fetchedMatched = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchedInput}`
      );

      const parsedResponse = await fetchedMatched.json();

      // update state
      dispatch({ type: SEARCH_MATCHING_SHOWS, payload: parsedResponse });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // get show details => on click
  const getShowDetails = useCallback(async (id) => {
    try {
      // update loading status
      dispatch({ type: SET_LOADING });

      // fetch clicked show card details
      // const clickedShowData = await fetch(`http://api.tvmaze.com/shows/${id}`);
      // const parsedClickedShow = await clickedShowData.json();
      const parsedClickedShow = details;

      console.log(parsedClickedShow);
      // update state
      dispatch({ type: SET_SHOW_DETAILS, payload: parsedClickedShow });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // clear show details
  const clearShowDetails = () => dispatch({ type: CLEAR_SHOW_DETAILS });

  // return provider tags loaded with desired data to surround the components that need this data
  return (
    <ShowsContext.Provider
      value={{
        isLoading,

        // homepage loading
        genreLists,
        setGenreLists,

        // search show
        matchingShows,
        searchShow,

        // show details
        showDetails,
        getShowDetails,
        clearShowDetails,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};
