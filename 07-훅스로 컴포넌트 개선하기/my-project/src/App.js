import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./App.css";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  const fn = useCallback(() => {
    console.log("hello")
    console.log("world")
  }, [])

  useEffect(() => {
    console.log("fresh render")
    fn()
  }, [fn])

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};

function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}

export default App;
