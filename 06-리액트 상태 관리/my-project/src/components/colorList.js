import React from "react";
import Color from "./color";
import { useColors } from "./hooks/colorProvider";

export default function ColorList() {
  const { colors } = useColors();
  
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
