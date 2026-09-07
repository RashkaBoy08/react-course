import { useEffect, useState } from "react";

export const Greeting = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState(30);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((previousCount) => {
          if (previousCount <= 1) {
            alert("Time finished");
            setIsRunning(false);
            return 0;
          }

          return previousCount - 1;
        });
      }, 1000);
    }

    //clean
    return () => clearInterval(timer);
  }, [isRunning]);

  //tart time btn
  const startCount = () => {
    if (inputTime <= 0) return;

    setIsRunning(true);
    setCount(inputTime);
  };

  //stop time btn
  const stopTime = () => {
    setIsRunning(false);
  };

  //reset button time
  const resetTime = () => {
    setIsRunning(false);
    setCount(0);
  };

  //markup;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Countdown Timer</h1>
        <label htmlFor="time">Set Time (Seconds):</label>
        <input
          id="time"
          type="number"
          min="1"
          placeholder="Enter your count down number"
          onChange={(e) => setInputTime(Number(e.target.value))}
          value={inputTime}
        />
        {/* displays */}
        <p>Time left: {count} Seconds </p>
        {/* Buttons */}
        <button disabled={isRunning} onClick={startCount}>
          Start time
        </button>
        <button disabled={!isRunning} onClick={stopTime}>
          Stop time
        </button>
        <button onClick={resetTime}>Reset Time</button>
      </div>
    </>
  );
};
