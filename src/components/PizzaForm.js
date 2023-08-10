import React from "react";

function PizzaForm({formPizza, handlePizzaEdit, handlePizzaFormSubmit}) {
  
  return (
    <form onSubmit={(e) => handlePizzaFormSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formPizza.topping}
            onChange={(e) => handlePizzaEdit(e)}
          />
        </div>
        <div className="col">
          <select onChange={(e) => handlePizzaEdit(e)} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div onChange={(e) => handlePizzaEdit(e)} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div onChange={(e) => handlePizzaEdit(e)} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
