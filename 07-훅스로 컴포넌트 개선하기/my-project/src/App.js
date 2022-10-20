import React, { useReducer, useState } from "react";
import "./App.css";

const Checkbox = () => {
  const [checked, toggle] = useReducer(checked => !checked, false)

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

function App() {
  return <Checkbox />;
}

export default App;
