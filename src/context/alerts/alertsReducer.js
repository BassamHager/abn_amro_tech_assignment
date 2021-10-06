import { SET_ALERT, CLEAR_ALERT } from "../types";

const alertsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return payload;
    case CLEAR_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertsReducer;
