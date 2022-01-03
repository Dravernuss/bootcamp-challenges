import axios from 'axios';
import { useState, useEffect } from 'react';
import './_GifGenerator.css';

const GifGenerator = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleGifs = async () => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
        q: query,
        limit: 10,
      },
    });
    setGifs(response.data.data);
  };

  const handleTrendingGifs = async () => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
        limit: 10,
      },
    });
    setGifs(response.data.data);
  };

  useEffect(() => {
    handleTrendingGifs()
  }, []);

  return (
    <div className="gifGenerator">
      <div className="gifGenerator__search">
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <button onClick={handleGifs}>New Gifs</button>
      </div>

      <div className="gifs">
        {gifs.map(({ images, id }) => {
          return <img src={images.fixed_height.url} alt="" key={id} />;
        })}
      </div>
    </div>
  );
};

export default GifGenerator;
