import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmojiGenerator from './pages/emoji/EmojiGenerator';
import GifGenerator from './pages/gifGenerator/GifGenerator';
import './_App.css';
import Home from './pages/Home';
import Nav from './components/nav/Nav';
import Paint from './pages/paint/Paint';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paint" element={<Paint />} />
            <Route path="/emoji" element={<EmojiGenerator />} />
            <Route path="/gif" element={<GifGenerator />} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
