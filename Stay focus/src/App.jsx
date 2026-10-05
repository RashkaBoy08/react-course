import { useState } from "react";
import ProductContext from "./ProductContext";
import ProductsCart from "./ProductsCart";

const products = [
  {
    id: "keyboard",
    productName: "Keyboard",
    price: 12,
  },
  {
    id: "large-screen",
    productName: "Large screen",
    price: 53,
  },
  {
    id: "mouse",
    productName: "Mouse",
    price: 5,
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Products in Grocery store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "12px" }}>
            {product.productName}: ${product.price}
            <br />
            <button
              onClick={() =>
                setCartItems((items) => [
                  ...items,
                  { ...product, id: crypto.randomUUID() },
                ])
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <ProductContext.Provider value={{ cartItems, setCartItems }}>
        <ProductsCart />
      </ProductContext.Provider>
    </div>
  );
};

export default App;
