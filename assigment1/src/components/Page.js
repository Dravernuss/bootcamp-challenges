import { useState } from "react"
import "./_Page.scss"
import ColorSquares from "./ColorSquares"
import Grid from "./Grid"

const Page = () => {
  const [userColor, setUserColor] = useState()

  const changeColor = (color) => {
    setUserColor(color)
  }

  return (
    <div className="Page">
      <Grid color={userColor} />
      <h1>Select a color and click on any cell of the grid:</h1>
      <ColorSquares color={userColor} changeColor={changeColor} />
    </div>
  )
}

export default Page
