import { useState } from "react";
export const CounterProgram = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounter((prevCount) => Math.max(0, prevCount - 1));
  };

  const reset = () => {
    setCounter(0);
  };

  //return
  return (
    <div
      style={{
        textAlign: "center",
        margin: "90px auto",
        border: "2px solid #333",
        boxShadow: "3px 2px 4px #33",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#272525",
          fontFamily: "fantasy",
          fontWeight: "500",
          marginTop: "-20px",
        }}
      >
        Counter Program
      </h1>
      <h3
        style={{
          fontFamily: "monospace",
          background: "#333",
          color: "rgb(255, 255, 255)",
          height: "40px",
          width: "100px",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        Count:
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>{counter}</span>
      </h3>

      <button
        onClick={increment}
        style={{
          margin: "5px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          margin: "5px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
      <button
        onClick={reset}
        style={{
          margin: "5px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};
