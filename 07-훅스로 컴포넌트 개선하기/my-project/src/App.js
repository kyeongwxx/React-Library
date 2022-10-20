import React, { useLayoutEffect, useState } from "react";
import "./App.css";

const useWindowSize = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
};

function App() {
  const [x, y] = useWindowSize();
  return (
    <div>
      {x} x {y}
    </div>
  );
}

export default App;
