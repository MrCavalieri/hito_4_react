import React, { useState } from "react";
import pastaCart from "./components/pastas";

const Cart = () => {
  const [cart, setCart] = useState(pastaCart);

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1); // Elimina la pasta del carrito si la cantidad es 0
    }
    setCart(newCart);
  };

  const total = cart.reduce(
    (acc, pasta) => acc + pasta.price * pasta.quantity,
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((pasta, index) => (
        <div key={pasta.id} className="cart-item">
          <img src={pasta.image} alt={pasta.name} />
          <h4>{pasta.name}</h4>
          <p>Precio: ${pasta.price}</p>
          <p>Cantidad: {pasta.quantity}</p>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <button onClick={() => decreaseQuantity(index)}>-</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
