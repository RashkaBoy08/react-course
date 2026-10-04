import { useContext } from "react";
import TranslateContext from "./TranslateContext";

function LanguageGreeting() {
  const language = useContext(TranslateContext);

  const greeting =
    language === "eng" ? "Hello, world!" : "¡Hola, mundo!";

  return (
    <h1
      style={{
        margin: "0 0 1.5rem",
        fontSize: "clamp(2rem, 5vw, 2.8rem)",
        color: "#0f172a",
        textAlign: "center",
        letterSpacing: "-0.04em",
      }}
    >
      {greeting}
    </h1>
  );
}

export default LanguageGreeting;
