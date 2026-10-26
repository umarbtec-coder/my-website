import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const basename = "/my-website";

// Restore the route after GitHub Pages sends us through 404.html
const redirect = sessionStorage.getItem("github-pages-redirect");

if (redirect) {
  sessionStorage.removeItem("github-pages-redirect");

  window.history.replaceState(
    null,
    "",
    basename + redirect
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);