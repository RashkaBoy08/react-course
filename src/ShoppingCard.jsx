import { useState } from "react";

export const ShoppingCart = () => {
  //  useState
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const handleCart = () => {
    if (productName.trim() !== "" && Number(productPrice) > 0) {
      //object
      const newProducts = {
        id: crypto.randomUUID(),
        name: productName,
        price: Number(productPrice),
        quantity: 1,
      };

      setProducts([...products, newProducts]);
      setProductName("");
      setProductPrice("");
    }
  };

  const handleProduct = (id) => {
    console.log(products);

    console.log(id);

    let updatedProducts = products.filter((item) => item.id != id);
    setProducts(updatedProducts);
  };

  const increaseProduct = (id) => {
    console.log(products);

    let updateProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setProducts(updateProducts);
  };

  const decreaseProduct = (id) => {
    let updateProducts = products.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );

    setProducts(updateProducts);
  };

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Markup
  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <h3>Add a product</h3>

      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      />

      <input
        type="number"
        placeholder="Product price"
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
        min={0}
        step={0.01}
      />

      <button onClick={handleCart}>Add to cart</button>

      <div>
        {products.length > 0 ? (
          <>
            <h3>Product in cart</h3>
            <ul>
              {products.map((item) => (
                <li key={item.id}>
                  <strong>{item.name} </strong>{" "}
                  <span> ( ${item.price.toFixed(2)} ) </span>
                  <div>
                    Quantity:
                    <button onClick={() => increaseProduct(item.id)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => decreaseProduct(item.id)}>-</button>
                  </div>
                  <button onClick={() => handleProduct(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
          </>
        ) : (
          <p>This cart is empty.</p>
        )}

        {/* END */}
      </div>

      {/* Finish */}
    </div>
  );
};
