import { useState } from "react";

export const ToggleMsg = () => {
  const [isVisible, setIsVisible] = useState(false);

  let toggle = () => setIsVisible(!isVisible);

  //markup
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Toggle buttons</h1>
      <button
        onClick={toggle}
        style={{
          background: "#333",
          color: "#fff",
          paddingInline: "30px",
          paddingBlock: "15px",
          fontSize: "24px",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        {isVisible ? "Show message" : "Hide message"}
      </button>
      {isVisible && <p>This is taggable message</p>}
    </div>
  );
};
