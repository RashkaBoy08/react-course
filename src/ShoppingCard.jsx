import { useState } from "react";

export const ShoppingCart = () => {
  //states;
  const [products] = useState([
    {
      id: 1,
      name: "Keyboard",
      price: 23,
    },
    {
      id: 2,
      name: "Mouse",
      price: 9,
    },
  ]);
  // const [cart, setCart] = useState([]);

  //markup
  return (
    <div>
      <h1>Products</h1>

      {products.map((item) => (
        <>
          <span key={item.id}> {item.name} </span>
          {/* //space */}
          <span key={item.id}> ${item.price} </span>
          <button>Add</button>
        </>
      ))}
    </div>
  );
};
