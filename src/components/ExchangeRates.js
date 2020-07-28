import React, { useEffect, useState } from "react";
import currencies from "../data/currencies";
import Balance from "./Balance";
const ExchangeRates = () => {
  function CurrencyValue() {}
  const [money] = useState(currencies);
  const [balance] = useState(87.43);

  const [exchange, setExchange] = useState([]);
  console.log(exchange);
  useEffect(() => {
    fetch(" https://api.exchangeratesapi.io/latest")
      .then((res) => res.json())
      .then((data) => {
        setExchange(data.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Balance total={balance} currencies={money} rates={exchange} />;
};

export default ExchangeRates;
