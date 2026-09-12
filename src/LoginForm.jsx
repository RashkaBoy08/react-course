import { useState } from "react";

export const LoginForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUser = (event) => {
    event.preventDefault();
    if (nameInput.trim() && passInput.trim() != "") {
      setIsLoggedIn(true);
      console.log("I got it bro");
    }
  };

  const logOut = () => {
    setNameInput("");
    setPassInput("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1
          style={{
            color: "#898585",
            textTransform: "capitalize",
            fontSize: "50px",
          }}
        >
          Welcome back, {nameInput}{" "}
        </h1>
        <button
          className="container"
          style={{
            color: "white",
            background: "#545151",
            padding: "50px",
            fontSize: "50px",
            cursor: "pointer",
          }}
          onClick={logOut}
        >
          Log out
        </button>
      </div>
    );
  }

  //markup
  return (
    <form
      className="container"
      onSubmit={getUser}
      style={{
        textAlign: "center",
        border: "2px solid #333",
        margin: "40px auto",
        height: "290px",
        width: "330px",
        boxShadow: "2px 2px  30px rgba(37, 36, 36, 0.2)",
        padding: "10px",
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans serif",
          color: "rgba(48, 49, 48, 0.87)",
          textTransform: "uppercase",
        }}
      >
        Login form
      </h1>
      {/* inputs */}
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => setNameInput(e.target.value)}
        value={nameInput}
        required
        // styling
        style={{
          marginTop: "8px",
          padding: "10px",
          color: "#2f2d2d",
          fontSize: "20px",
          outline: "none",
          border: "none",
          boxShadow: `2px 3px  10px rgba(0,0,0,0.3)`,
        }}
      />

      <input
        type="password"
        placeholder="Enter your  password"
        maxLength={12}
        minLength={8}
        onChange={(e) => setPassInput(e.target.value)}
        value={passInput}
        required
        // styling
        style={{
          padding: "10px",
          color: "#2f2d2d",
          fontSize: "20px",
          outline: "none",
          border: "none",
          boxShadow: `2px 3px  10px rgba(0,0,0,0.3)`,
          marginTop: "22px",
        }}
      />

      <button
        type="submit"
        //styling
        style={{
          fontSize: "20px",
          paddingBlock: "16px",
          textTransform: "uppercase",
          paddingInline: "25px",
          marginTop: "29px",
          width: "85%",
          color: "#d4d0d0",
          background: "#545050",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login Bro
      </button>
    </form>
  );
};
