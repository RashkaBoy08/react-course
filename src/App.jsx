import { useState } from "react";
import TranslateContext from "./TranslateContext";
import LanguageGreeting from "./LanguageGreeting";

function App() {
  const [transLan, setTransLan] = useState("eng");

  const toggleLanguage = () => {
    setTransLan((prevLan) => (prevLan === "eng" ? "es" : "eng"));
  };

  //markup
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f4f8f3 0%, #e9f5ee 45%, #dfeee7 100%)",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid rgba(25, 124, 114, 0.15)",
          borderRadius: "24px",
          padding: "2rem 2.5rem",
          boxShadow: "0 18px 45px rgba(25, 124, 114, 0.12)",
          backdropFilter: "blur(8px)",
          width: "min(100%, 420px)",
        }}
      >
        <TranslateContext.Provider value={transLan}>
          <LanguageGreeting />
        </TranslateContext.Provider>

        <button
          onClick={toggleLanguage}
          style={{
            background: "linear-gradient(135deg, #197c72 0%, #0f6d68 100%)",
            color: "#ffffff",
            border: "none",
            borderRadius: "14px",
            padding: "0.95rem 1.5rem",
            fontSize: "0.96rem",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 12px 24px rgba(25, 124, 114, 0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            letterSpacing: "0.02em",
          }}
        >
          Switch to {transLan === "eng" ? "Spanish" : "English"} mode
        </button>
      </div>
    </div>
  );
}

export default App;
