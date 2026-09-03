import { useState, useEffect } from "react";

export const MouseTracker = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => { 
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //markup
  return (
    <div>
      <h1>Mouse Tracker</h1>
      <p>Mouse X: {mouseX}</p>
      <p>Mouse Y: {mouseY}</p>
    </div>
  );
};
