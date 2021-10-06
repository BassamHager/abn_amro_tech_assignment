import { createContext, useCallback } from "react";
import { AlertsState } from "./alerts/alertsContext";
import { ShowsState } from "./shows/showsContext";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  // combine provider
  const combinedContexts = useCallback(
    (providers, components) =>
      providers.reduce((AccProvider, CurProvider) => (
        <AccProvider>
          <CurProvider> {components} </CurProvider>
        </AccProvider>
      )),
    []
  );

  return combinedContexts([AlertsState, ShowsState], children);
};
