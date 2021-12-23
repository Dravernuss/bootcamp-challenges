import "./_ColorSquares.scss"

const ColorSquares = ({ color, changeColor }) => {
  return (
    <div className="color__selector">
      <input
        value={color}
        type="color"
        onChange={(e) => {
          console.log(e.target.value)
          changeColor(e.target.value)
        }}
      />

      <div
        className="colorBox colorBox--red"
        onClick={() => changeColor("#FF0000")}
      ></div>
      <div
        className="colorBox colorBox--orange"
        onClick={() => changeColor("#FF7300")}
      ></div>
      <div
        className="colorBox colorBox--skyblue"
        onClick={() => changeColor("#00D9FF")}
      ></div>
      <div
        className="colorBox colorBox--purple"
        onClick={() => changeColor("#7700FF")}
      ></div>
      <div
        className="colorBox colorBox--original"
        onClick={() => changeColor("#195252")}
      ></div>
      <input
        value={color}
        type="text"
        onChange={(e) => {
          console.log(e.target.value)
          changeColor(e.target.value)
        }}
      />
    </div>
  )
}

export default ColorSquares
