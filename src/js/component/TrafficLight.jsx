import React, { useState } from "react";
import "../../styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="container">
      <div className="traffic-light">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
            onClick={() => setColor(lightColor)}
          ></div>
        ))}
      </div>
      <button onClick={toggleColor}>Toggle Color</button>
      <button onClick={addPurple}>Add Purple</button>
    </div>
  );
}

export default TrafficLight;
