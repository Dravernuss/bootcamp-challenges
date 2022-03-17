import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
//import ProductList from "./components/ProductList";
import ProductPage from "./pages/products";
import Login from "./components/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar.js";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Login />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
