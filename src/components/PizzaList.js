import React from "react";
import Pizza from "./Pizza";

function PizzaList({allPizzas, handleChoosePizza}) {


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {allPizzas.map((pizza) => (
          <Pizza
          key={pizza.id}
          {...pizza}
          handleChoosePizza={handleChoosePizza}
          pizza={pizza}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PizzaList;
