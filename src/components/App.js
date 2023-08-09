import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const baseURL = "http://localhost:3001/pizzas"
  const [allPizzas, setAllPizzas] = useState([])
  const [formPizza, setFormPizza] = useState({topping: "", size: "", vegetarian: true})

  useEffect(() => {
    fetch(baseURL)
    .then(r => r.json())
    .then(r => setAllPizzas(r))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList
      allPizzas={allPizzas}
      setFormPizza={setFormPizza}
      />
    </>
  );
}

export default App;
