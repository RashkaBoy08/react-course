import  { useContext } from "react";
import TranslateContext from "./TranslateContext";

function LanguageGreeting() {
  const translator = useContext(TranslateContext);

  console.log(translator);


  const admin = "Maahir";

  //markup
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "120px",
        padding: "0.5rem 0 1.5rem",
      }}
    >
      {translator === "eng" ? (
        <p
          style={{
            margin: 0,
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#172722",
            lineHeight: 1.4,
            letterSpacing: "-0.03em",
            textShadow: "0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          Hello, Welcome {admin}
        </p>
      ) : (
        <p
          style={{
            margin: 0,
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#172722",
            lineHeight: 1.4,
            letterSpacing: "-0.03em",
            textShadow: "0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          ¡Hola! bienvenido, {admin}
        </p>
      )}
    </div>
  );
}

export default LanguageGreeting;
