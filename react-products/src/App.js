import { useState } from "react";
import "./App.css";
import productsMock from "./products.json";

const filterAndSort = (products, color) => {
  return {
    menorAMayor() {
      return [...products].sort((a, b) => a.price - b.price);
    },
    mayorAMenor() {
      return [...products].sort((a, b) => b.price - a.price);
    },
    limpiar() {
      return productsMock;
    },
    porColor() {
      if (color === "all") {
        return this.limpiar();
      } else {
        return productsMock.filter((product) => product.color === color);
      }
    },
  };
};

const Product = ({ product: { name, image, price } }) => {
  return (
    <div className="product">
      <p className="product__image">{image}</p>
      <p>${price}</p>
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

const App = () => {
  // hook utilizando useState
  const [products, setProducts] = useState(productsMock);

  const filterOrSort = (type, color = "") => {
    const filteredProducts = filterAndSort(products, color)[type]();
    setProducts(filteredProducts);
  };

  return (
    <div id="app">
      <div className="filterAndSearch">
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("limpiar")}
        >
          Limpiar Filtros
        </button>
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("menorAMayor")}
        >
          Ordenar por Menor Precio
        </button>
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("mayorAMenor")}
        >
          Ordenar por Mayor Precio
        </button>
        <div className="filterAndSearch__option">
          <label htmlFor="color">Filtrar Por Color: </label>
          <select
            name="color"
            id="color"
            onChange={(e) => filterOrSort("porColor", e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="verde">Verde</option>
            <option value="amarillo">Amarillo</option>
            <option value="rojo">Rojo</option>
          </select>
        </div>
      </div>

      <div className="productsContainer">
        {products.map((product) => (
          <Product product={product} key={product.name.replace(" ", "")} />
        ))}
      </div>
    </div>
  );
};

export default App;
