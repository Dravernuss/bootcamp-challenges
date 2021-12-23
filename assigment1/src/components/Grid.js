import "./_Grid.scss"
import Square from "./Square"

const Grid = ({ color }) => {
  const Cuadricula = new Array(100)
  for (let i = 0; i < Cuadricula.length; i++) {
    Cuadricula[i] = i + 1
  }
  return (
    <div className="gridContainer">
      {Cuadricula.map((key) => {
        return <Square key={key} userColor={color} />
      })}
    </div>
  )
}

export default Grid
