import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const lightColor = ["red", "yellow", "green"];
  const [activeColor, setActiveColor] = useState(0);

  function changeColor() {
    if (activeColor < 3) {
      setActiveColor(activeColor + 2);
    } else {
      setActiveColor(0);
    }
  }

  function returnClassNameColor(num: number) {
    return `circle ${
      activeColor % 3 === num ? lightColor[activeColor] : "black"
    }`;
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={returnClassNameColor(0)}></div>
        <div className={returnClassNameColor(1)}></div>
        <div className={returnClassNameColor(2)}></div>
      </div>
      <button onClick={changeColor} className="next-state-button">
        Next State
      </button>
    </div>
  );
};
