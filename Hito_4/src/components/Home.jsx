import React, { useEffect, useState } from "react";
import pastas from "./components/pastas";
import CardPasta from "./components/CardPasta";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  return (
    <div>
      <h2>Pastas</h2>
      {pastas.map((pasta) => (
        <CardPasta key={pasta.id} pasta={pasta} />
      ))}

      <h2>Pizzas</h2>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>Precio: {pizza.price}</p>
          <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
          <img src={pizza.image} alt={pizza.name} />
          <p>{pizza.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
