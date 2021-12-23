import { useState } from "react";
import "./Shape.css";

const Shape=({type, userColor})=>{
    const [bgColor, setBgColor] = useState();

    const changeColor = ()=>{
        setBgColor(userColor);
    };
    return(
        <div 
        className={`shape ${type}`} 
        onClick={changeColor} 
        style={{backgroundColor: bgColor}}
        ></div>
    );
};
export default Shape;