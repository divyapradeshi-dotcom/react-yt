import React, { useState, useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A is changing");
  }

  function bChanging() {
    console.log("B is changing");
  }

  useEffect(() => {
    bChanging();
  }, [b]); // runs when b changes

  useEffect(() => {
    aChanging();
  }, [a]); // runs when a changes

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={() => setA(a + 1)}>Button A</button>
      <button onClick={() => setB(b + 1)}>Button B</button>
    </div>
  );
};

export default App;
