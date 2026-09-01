import { useState, useEffect } from "react";

export const GreetingTitle = () => {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    document.title = userName ? `🎉Hello, ${userName}` : "Welome User";
    if (userName && greeting) {
      document.title = `${greeting}, ${userName}`;
    }
  }, [userName, greeting]);

  //markup;
  return (
    <div>
      <h2>Enter yout name</h2>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <br />
      <br />
      <h2>Choose greeting</h2>
      <input
        type="text"
        placeholder="choose greeting"
        onChange={(e) => setGreeting(e.target.value)}
        value={greeting}
      />
    </div>
  );
};
