import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
