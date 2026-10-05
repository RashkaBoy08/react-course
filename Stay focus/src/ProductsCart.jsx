import { useContext } from "react";
import ProductContext from "./ProductContext";

function ProductsCart() {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Products in cart</h1>
      <p>
        {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
      </p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "12px" }}>
              {item.productName} - ${item.price.toFixed(2)}{" "}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total amount: ${totalAmount.toFixed(2)}</p>
      {cartItems.length > 0 && (
        <button onClick={() => setCartItems([])}>Clear cart</button>
      )}
    </div>
  );
}

export default ProductsCart;
