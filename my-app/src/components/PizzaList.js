import React, { useEffect, useState } from 'react';

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, []);

  async function fetchPizzas() {
    const response = await fetch('/pizzas');
    const data = await response.json();
    setPizzas(data);
  }

  return (
    <div>
      <h1>Pizza List</h1>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h3>{pizza.name}</h3>
            <p>Ingredients: {pizza.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;