import React, { useState } from "react";
import Balance from "./components/Balance";
import CalcPayment from "./components/CalcPayment";
import Payments from "./components/Payments";
import currencies from "./data/currencies";
import ExchangeRates from "./components/ExchangeRates";
import "./App.css";

const App = () => {
  const [money] = useState(currencies);
  const [balance] = useState(87.43);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Payments</h1>
      </header>
      {/* <Balance total={balance} currencies={money} /> */}
      <ExchangeRates />
      <CalcPayment currencies={money} />
      <h2>Payments</h2>
      <Payments balance={balance} />
    </div>
  );
};

export default App;
