// index.js

import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap your entire application with Helmet to manage head tags */}
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Delight your taste buds with our delicious dishes at Little Lemon restaurant. A culinary experience like no other."
      />
      <meta property="og:title" content="Little Lemon Restaurant" />
      <meta
        property="og:description"
        content="Delight your taste buds with our delicious dishes at Little Lemon restaurant. A culinary experience like no other."
      />
      <meta property="og:image" content="url_to_your_image.jpg" />
      <title>Little Lemon Restaurant</title>
      {/* Add any other head tags you need */}
    </Helmet>
    <App />
  </React.StrictMode>
);

reportWebVitals();
