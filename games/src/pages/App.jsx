import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  banano: "🍌",
  platano: "🍌",
  manzana: "🍎",
};

const transformTextToEmoji = (text) => {
  /* const newText = text.split(" ").map((word) => {
    return emojiDictionary[word] ?? word;
  });
  return newText.join(" ");
}; */

  return text
    .split(" ")
    .map((word) => emojiDictionary[word] ?? word)
    .join(" ");
};

const App = () => {
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("Nuevo text");

  const onTextAreaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app">
      <textarea
        value={text}
        className="app_input"
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
      ></textarea>
      <input
        className="app_input"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p style={{ color }}>{transformTextToEmoji(text)}</p>
    </div>
  );
};

export default App;
