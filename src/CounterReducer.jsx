import "./App.css";
import { useReducer } from "react";

export function CounterReducer() {
  //managing state;
  const initialState = {
    counterA: 9,
    counterB: 5,
  };

  //reducer function;
  function doubleCounter(state, action) {
    console.log(action);

    switch (action.type) {
      case "A+":
        return { ...state, counterA: state.counterA + 1 };
      case "B-":
        return {
          ...state,
          counterB: state.counterB > 0 ? state.counterB - 1 : 0,
        };
      case "A-":
        return {
          ...state,
          counterA: state.counterA > 0 ? state.counterA - 1 : 0,
        };
      case "B+":
        return { ...state, counterB: state.counterB + 1 };
      case "resetAll":
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(doubleCounter, initialState);

  //markup
  return (
    <div className="container">
      <h1>Double Counter</h1>
      {/* Counter A */}
      <div className="counter-a">
        <h3>Counter A: {state.counterA} </h3>

        {/* Buttons */}
        <button
          type="button"
          className="counter-btn"
          onClick={() => dispatch({ type: "A+" })}
        >
          A+
        </button>
        <button
          type="button"
          className="counter-btn"
          onClick={() => dispatch({ type: "A-" })}
        >
          A-
        </button>
      </div>

      {/* Counter B */}
      <div className="counter-b">
        <h3>Counter B: {state.counterB} </h3>
        {/* buttons */}
        <button
          type="button"
          className="counter-btn"
          onClick={() => dispatch({ type: "B+" })}
        >
          B+
        </button>
        <button
          type="button"
          className="counter-btn"
          onClick={() => dispatch({ type: "B-" })}
        >
          B-
        </button>
      </div>
      {/* reset button */}
      <button
        type="button"
        className="reset-btn"
        onClick={() => dispatch({ type: "resetAll" })}
      >
        Reset All
      </button>
    </div>
  );
}
