import { useState } from "react";

export const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const AddToCart = () => {
    if (!productName.trim() || !price) {
      return;
    }

    const NewProduct = {
      id: crypto.randomUUID(),
      name: productName.trim(),
      price: Number(price),
      quantity: 1,
    };

    setCart([...cart, NewProduct]);
    console.log(NewProduct);

    setProductName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // html
  return (
    <div>
      <h1>Simple Shopping cart</h1>
      <h2>Add to cart</h2>

      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={AddToCart}>Add to cart</button>

      <h2>cart</h2>
      {cart.length === 0 ? (
        <p>T</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {" "}
              <strong> {item.name} </strong> - ${item.price.toFixed(2)}{" "}
              <div>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>

                <span> {item.quantity} </span>

                <button onClick={() => increaseQuantity(item.id)}>+</button>

                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      {/* finish */}
    </div>
  );
};
