import React from "react";
import ReactDOM from "react-dom";
// import "react-id-swiper/src/styles/scss/swiper.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
