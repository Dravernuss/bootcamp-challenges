import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App.jsx";
import GifGenerator from "./pages/GifGenerator.jsx";
import Rutas from "./Rutas.js";

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById("root")
);
