import './_ColorSelector.css';

const ColorSelector = ({ color, changeColor }) => {
  return (
    <div className="color__selector">
      <input
        value={color}
        type="color"
        onChange={e => {
          console.log(e.target.value);
          changeColor(e.target.value);
        }}
      />

      <div
        className="colorBox colorBox--red"
        onClick={() => changeColor('#ff0000')}
      ></div>
      <div
        className="colorBox colorBox--pink"
        onClick={() => changeColor('#ff00ff')}
      ></div>
      <div
        className="colorBox colorBox--green"
        onClick={() => changeColor('#00ff72')}
      ></div>
      <div
        className="colorBox colorBox--purple"
        onClick={() => changeColor('#7700ff')}
      ></div>

      <input
        value={color}
        type="text"
        onChange={e => {
          console.log(e.target.value);
          changeColor(e.target.value);
        }}
      />
    </div>
  );
};

export default ColorSelector;
