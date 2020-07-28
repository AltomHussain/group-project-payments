import React, { useState } from "react";
import "./Balance.css";

const Balance = (props) => {
  let array = [];
  for (let key in props.rates) {
    array.push(props.rates[key]);
  }
  array[8] = 1;
  const [state, setState] = useState(0);
  function handleChosen(event) {
    setState((props.total * event.target.value).toFixed(3));
  }
  return (
    <div className="Balance">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{props.total}</span>
      </h2>
      <div className="Balance-alt">
        Your balance is {state} in
        <select onChange={handleChosen} defaultValue={state}>
          <option>Select currency</option>
          {props.currencies.map((currency, index) => (
            <option value={array[index]} key={index}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Balance;
