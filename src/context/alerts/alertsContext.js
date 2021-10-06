import { createContext, useReducer } from "react";
import AlertsReducer from "./alertsReducer";
import { SET_ALERT, CLEAR_ALERT } from "../types";

export const AlertsContext = createContext({});

export const AlertsState = ({ children }) => {
  // initial state
  const initialState = null;

  const [alertState, dispatch] = useReducer(AlertsReducer, initialState);

  // update state
  const setAlert = (message, type) => {
    // set alert
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });

    // clear alert
    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 4000);
  };

  // return provider tags to inject interact state into the wrapped children
  return (
    <AlertsContext.Provider
      value={{
        alert: alertState,
        setAlert,
      }}
    >
      {children}
    </AlertsContext.Provider>
  );
};
