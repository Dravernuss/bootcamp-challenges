import { useState } from 'react';
import './EmojiGenerator.css';

const emojiDictionary = {
  banano: '🍌',
  platano: '🍌',
  manzana: '🍎',
};

const transformTextToEmoji = text =>
  text
    .split(' ')
    .map(word => emojiDictionary[word] ?? word)
    .join(' ');

const EmojiGenerator = () => {
  const [color, setColor] = useState('blue');
  const [text, setText] = useState('Quiero manzana');

  const onTextAreaChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="emojiGenerator">
      <textarea
        value={text}
        className="emojiGenerator__input"
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
      ></textarea>
      <input
        className="emojiGenerator__input"
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <p style={{ color }}>{transformTextToEmoji(text)}</p>
    </div>
  );
};

export default EmojiGenerator;
