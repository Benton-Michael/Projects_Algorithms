import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
function App() {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "25",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "c5afc46010msh37b7a15d21e2de3p1ab132jsn28693b6e6c3b",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response);
        setCoins(response.data.data.coins);
      })
      // Get a list of coins. Coins are by default ordered by their rank, which - somewhat simplified - means that they are ordered on marketcap. The response not only returns a list of coins, but also statistics regarding the requested list, such as the volume in the last 24 hours.
      // https://developers.coinranking.com/api/documentation/coins#get-coin-price
      // https://rapidapi.com/Coinranking/api/coinranking1/

      .catch((error) => console.log("Error in get all coins", error));
  }, []);
  return (
    <div className="App">
      <h1>Cryptocurrency Dashboard</h1>
      <h2>Coin info:</h2>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Price:</th>
            <th>MarketCap:</th>
            <th>Predictions:</th>
          </tr>
        </thead>

        <div className="table">
          {coins.map((coin, idx) => (
            <ul key={idx}>
              <li>{coin.name}</li>
              <li>{coin.price}</li>
              <li>{coin.symbol}</li>
            </ul>
          ))}
        </div>
      </table>
    </div>
  );
}

export default App;
