import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import "animate.css";
import "@fortawesome/fontawesome-free";
import "@svgr/webpack";
import "file-loader";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
