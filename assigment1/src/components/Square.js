import { useState } from "react"
import "./_Square.scss"

const Square = ({ key, userColor }) => {
  const [bgColor, setBgColor] = useState()

  const changeColor = () => {
    setBgColor(userColor)
  }
  return (
    <div
      className={`square ${key}`}
      key={String(key)}
      onClick={changeColor}
      style={{ backgroundColor: bgColor }}
    ></div>
  )
}

export default Square
