import { useState } from "react";
import "./App.css";

function App() {
  const convertToFahrenheight = (temperatura) =>
    (Number(temperatura) * 9) / 5 + 32;
  const convertToCelsius = (temperatura) =>
    ((Number(temperatura) - 32) * 5) / 9;

  const [escala, setEscala] = useState(1);

  const [temperatura, setTemperatura] = useState(0);

  const [estado, setEstado] = useState(0);

  const [temp, setTemp] = useState(0);

  const ChangeEscala = (e) => {
    setEscala(e);
    setTemperatura(0);
    setTemp(0);
    setEstado(0);
  };

  const getTemperature = (e) => {
    e.preventDefault();
    setEstado(1);
    if (escala == 1) {
      setTemperatura(convertToFahrenheight(temperatura));
      setTemp(temperatura);
    } else if (escala == 2) {
      setTemperatura(convertToCelsius(temperatura));
      setTemp(temperatura);
    }
  };

  const fijarTemperatura = (e) => {
    setTemperatura(e);
    setTemp(e);
    setEstado(0);
  };

  return (
    <main className="main">
      <div className="document">
        <h1 className="title">Conversor de temperaturas</h1>
        <form
          onSubmit={(e) => {
            getTemperature(e);
          }}
          className="form"
        >
          <div className="field">
            <select
              onChange={(e) => {
                ChangeEscala(e.target.value);
              }}
            >
              <option value={1}>Celsius (°C)</option>
              <option value={2}>Fahrenheight (°F)</option>
            </select>
          </div>
          <div className="field">
            <input
              required
              type="number"
              value={temp}
              onChange={(e) => {
                fijarTemperatura(e.target.value);
              }}
            />
            <button type="submit">Convertir</button>
          </div>
        </form>
        <div>
          <h3>Convertido a Celsius</h3>
          <div>
            {escala == 2 && estado == 1 ? "El valor es: " + temperatura : ""}
          </div>
        </div>
        <div>
          <h3>Convertido a Fahrenheight</h3>
          <div>
            {escala == 1 && estado == 1 ? "El valor es: " + temperatura : ""}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
