function Greeting(props) {
  console.log(props);

  return (
    <>
      <h4>Hello, {props.userName} </h4>
      <h4>Your email address is: {props.email} </h4>
      <br />
      <h4>Your id number is: {props.idNum} </h4>
      <h4>Your phone number is: {props.phone} </h4>
    </>
  );
}

export default Greeting;
