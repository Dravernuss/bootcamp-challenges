import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setImages(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {images.map(({ id, title, thumbnailUrl }) => (
          <div key={id} className="card">
            <img src={thumbnailUrl} alt="" className="card image" />
            <div>
              <h3 className="quote">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
