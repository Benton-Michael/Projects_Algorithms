import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";




function App() {
  
  
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios 
      .get("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price")
      .then((res) => {
        console.log(res.data);

        setCoins(res.data);
  })

    .catch((error) => console.log(error));
    }, []);
  
  
  return (
    <div className="App">
      <h1>Data from Coinranking API</h1>
      <ul>
        {coinRankApiData.map((coin, index) => (
          <li key={index}>{coin.data.coin.name}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
