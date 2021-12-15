import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/pokedex/Pokedex";
import Pokemon from "./components/pokemon/Pokemon";
import "./_App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
