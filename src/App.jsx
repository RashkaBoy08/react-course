import Greeting from "./Usercard";

function App() {
  let userName = "@username";

  let email = "123@example.com";

  const idNum = "48BC12";
  const phone = "25238383";

  return (
    <>
      <Greeting userName={userName} email={email} idNum={idNum} phone={phone} />
    </>
  );
}

export default App;
