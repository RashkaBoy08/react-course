import { useState } from "react";
import TranslateContext from "./TranslateContext";
import Translator from "./Translator";

function App() {
  const [language, setLanguage] = useState("English");

  function toggleLanguages() {
    setLanguage((currentLanguage) =>
      currentLanguage === "English" ? "Spanish" : "English",
    );
  }

  return (
    <>
      <button onClick={toggleLanguages}>
        Switch to {language === "English" ? "Spanish" : "English"}{" "}
      </button>
      <TranslateContext.Provider value={language}>
        <Translator />
      </TranslateContext.Provider>
    </>
  );
}

export default App;
