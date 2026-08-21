import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button onClick={toggleLight}>
        {isOn ? "Turn off" : "Turn on"}
      </button>

      <p>{isOn ? "The light is on" : "The light is off"}</p>
    </>
  );
}

export default App;