import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./pages/App.jsx";
import GifGenerator from "./pages/GifGenerator.jsx";
import Paint from "./pages/Paint.jsx";

const Rutas = () => {
  return (
    <BrowserRouter>
      <div className="Rutas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/gifgenerator" element={<GifGenerator />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Rutas;
