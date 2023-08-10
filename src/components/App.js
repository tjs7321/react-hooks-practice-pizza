import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const initialPizzaState = {topping: "", size: "", vegetarian: true}
  const baseURL = "http://localhost:3001/pizzas"
  const [allPizzas, setAllPizzas] = useState([])
  const [formPizza, setFormPizza] = useState(initialPizzaState)


  useEffect(() => {
    fetch(baseURL)
    .then(r => r.json())
    .then(r => setAllPizzas(r))
  }, [formPizza])

  function handleChoosePizza(pizza) {
    setFormPizza(pizza)
  }

  function handlePizzaEdit(e) {
    let {name, value} = e.target
    if (value === "Vegetarian") {value=true}
    else if (value === "Not Vegetarian") {value=false}
    setFormPizza({...formPizza, [name]: value})
  }
  

  function handlePizzaFormSubmit(e) {
    e.preventDefault()
    fetch(baseURL+'/'+formPizza.id, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPizza)
    })
    setFormPizza(initialPizzaState)
  }

  return (
    <>
      <Header />
      <PizzaForm
      formPizza={formPizza}
      handlePizzaEdit={handlePizzaEdit}
      handlePizzaFormSubmit={handlePizzaFormSubmit}
      />
      <PizzaList
      allPizzas={allPizzas}
      handleChoosePizza={handleChoosePizza}
      />
    </>
  );
}

export default App;
