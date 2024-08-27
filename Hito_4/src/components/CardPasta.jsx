import React from "react";

const CardPasta = ({ pasta }) => {
  return (
    <div className="card">
      <img src={pasta.image} alt={pasta.name} />
      <h3>{pasta.name}</h3>
      <p>Precio: ${pasta.price}</p>
      <ul>
        {pasta.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardPasta;
