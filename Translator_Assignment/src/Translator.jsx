import { useContext } from "react";
import TranslateContext from "./TranslateContext";

function Translator() {
  const language = useContext(TranslateContext);

  return (
    <div>
      {language === "English" ? (
        <p>Hello, welcome Maahir.</p>
      ) : (
        <p>Hola, bienvenido Maahir.</p>
      )}
    </div>
  );
}

export default Translator;
