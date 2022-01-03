import { useState } from 'react';
import ColorSelector from '../../components/color-selector/ColorSelector';
import Shape from '../../components/shape/Shape';
import './_Paint.css';

const Paint = () => {
  const [userColor, setUserColor] = useState('red');

  const changeColor = color => {
    setUserColor(color);
  };

  return (
    <div>
      <ColorSelector color={userColor} changeColor={changeColor} />
      <div className="shapes">
        <Shape userColor={userColor} type="circle" />
        <Shape userColor={userColor} type="rectangle" />
        <Shape userColor={userColor} type="parallelogram" />
        <Shape userColor={userColor} type="square" />
      </div>
    </div>
  );
};

export default Paint;
