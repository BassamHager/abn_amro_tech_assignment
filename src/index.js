import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ShowsState } from "./context/shows/showsContext";

ReactDOM.render(
  <React.StrictMode>
    <ShowsState>
      <App />
    </ShowsState>
  </React.StrictMode>,
  document.getElementById("root")
);
