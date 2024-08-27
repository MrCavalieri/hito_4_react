import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, []);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Precio: {pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
      <img src={pizza.image} alt={pizza.name} />
      <p>{pizza.description}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
