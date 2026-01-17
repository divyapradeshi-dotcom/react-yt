import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("");

  function increase() {
    setNum(prev => prev + 1);
  }

  function decrease() {
    setNum(prev => prev - 1);
  }

  function jump_By_5() {
    setNum(prev => prev + 5);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
    setTitle(""); // clear input
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump_By_5}>Jump_5</button>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
