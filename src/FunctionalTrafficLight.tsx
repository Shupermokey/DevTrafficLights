import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [lightColor, setLightColor] = useState([
    "red",
    "yellow",
    "green",
    "black",
  ]);
  const [activeColor, setActiveColor] = useState(0);
  const [inactiveColor, setInctiveColor] = useState(3);

  function changeColor() {
    if (activeColor < 2) {
      setActiveColor(activeColor + 1);
    } else {
      setActiveColor(0);
    }
  }

  function returnLightColor(num: number) {
    return `circle ${
      activeColor % 3 === num
        ? lightColor[activeColor]
        : lightColor[inactiveColor]
    }`;
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={returnLightColor(0)}></div>
        <div className={returnLightColor(1)}></div>
        <div className={returnLightColor(2)}></div>
      </div>
      <button onClick={changeColor} className="next-state-button">
        Next State
      </button>
    </div>
  );
};
