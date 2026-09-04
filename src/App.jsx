import { useState } from "react";
function App() {
  const [color, setColor] = useState();

  const switchToRed = () => {
    setColor("Red");
  };

  //green color
  const switchToGreen = () => {
    setColor("green");
  };

  const switchToBlue = () => {
    setColor("blue");
  };

  const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  //markup
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          padding: "30px",
          margin: "20px",
          borderRadius: "10px",
          color: "#fff",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        {color}
      </div>
      <h1>Color change</h1>
      <button onClick={switchToRed}>Red background</button>
      <button onClick={switchToGreen}>Green background</button>
      <button onClick={switchToBlue}>Blue background</button>
      <button onClick={randomColor}>Random background</button>
    </div>
  );
}

export default App;
