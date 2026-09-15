export const ClickedBtn = ({ id }) => {
  //memory
  let handleEvent = () => {
    alert(`You clicked button ${id}`);
  };

  //markup
  return (
    <div>
      <button onClick={handleEvent}>Click me</button>
    </div>
  );
};
