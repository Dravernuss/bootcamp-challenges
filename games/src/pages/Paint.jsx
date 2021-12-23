import { useState } from "react";
import Shape from "../components/shape/Shape.jsx";
import "./Paint.css";

const Paint=()=>{
    const [userColor, setUserColor] = useState("red");

    const changeColor = (color) =>{
        setUserColor(color);
    }

    return(
        <div>
            <input 
            value={userColor}
            type="text" 
            onChange={(e)=>{
                setUserColor(e.target.value);
                }} 
            />
            <div className="colorBox red" onClick={()=>changeColor("red")}></div>
            <div className="colorBox yellow" onClick={()=>changeColor("yellow")}></div>
            <div className="colorBox blue" onClick={()=>changeColor("blue")}></div>
            <Shape userColor={userColor} type="circle" />
            <Shape userColor={userColor} type="rectangle" />
            <Shape userColor={userColor} type="parallelogram" />
            <Shape userColor={userColor} type="square" />
        </div>
    );
};
export default Paint;