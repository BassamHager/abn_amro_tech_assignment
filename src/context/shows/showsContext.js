import { createContext, useReducer, useCallback } from "react";

// types
import { SET_LOADING, FETCH_FULL_DATA, SET_GENRES_LISTS } from "../types";

// reducer
import showsReducer from "./showsReducer";

// mock data
import mockData from "../mock2.json";

export const ShowsContext = createContext();

export const ShowsState = ({ children }) => {
  // initial state
  const initialState = {
    showsData: [],
    genreLists: {},
    isLoading: false,
  };

  // updated state
  const [state, dispatch] = useReducer(showsReducer, initialState);

  // helper function: fetch full data, update state & return fetched
  // const fetchFullData = useCallback(async () => {
  //   try {
  //     // fetch url - todo
  //     // const fetchedData = await fetch(process.env.REACT_APP_FULL_DATA_ENDPOINT);

  //     // update state
  //     dispatch({ type: FETCH_FULL_DATA, payload: mockData });

  //     // return fetched data
  //     return mockData;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // helper function: takes array of objects & returns a new Map its key is genre & its value is array of objects
  const filterGenreLists = (listsArray) => {
    // filter by few desired genres - select few from data - todo
    const desiredGenres = ["Action", "Comedy", "Drama"]; // update lower - todo

    try {
      const filteredListsMap = listsArray.reduce((acc, cur) => {
        const genres = cur?.genres;

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
  };

  // helper function: takes an object & returns it with values (arrays) sorted by rating & limited length to 10
  const sortAndLimitLists = (map) => {
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
  };

  // filter shows per genre, sort by rating & update the state
  const setGenreLists = useCallback(async () => {
    try {
      // update loading status
      dispatch({ type: SET_LOADING });

      // fetch full data
      //const data = await fetchFullData();
      const dataArr = mockData;

      // filter lists per genre
      const listsMap = filterGenreLists(dataArr);

      // sort by rating & limit length to 10
      const sortedListsMap = sortAndLimitLists(listsMap);

      // update state
      dispatch({ type: SET_GENRES_LISTS, payload: sortedListsMap });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // return provider tags loaded with desired data to surround the components that need this data
  return (
    <ShowsContext.Provider
      value={{
        setGenreLists,
        genreLists: state.genreLists,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};
