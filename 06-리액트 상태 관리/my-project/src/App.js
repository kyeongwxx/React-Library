import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/colorList";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}

export default App;
