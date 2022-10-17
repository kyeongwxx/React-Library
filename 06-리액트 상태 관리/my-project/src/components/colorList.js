import React from "react";
import Color from "./color";

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div className="color-list">
      {colors.colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
