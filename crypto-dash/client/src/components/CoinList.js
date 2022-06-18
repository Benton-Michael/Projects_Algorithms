import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const CoinList = () => {
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
  // without the curley it doesn't know if it is JS or html
  return (
    <div className="container">
      {/* <h1>Cryptocurrency Dashboard</h1> */}
      <h2>Coin info:</h2>
      <div className="container d-flex flex-wrap justify-content-between">
      {coins.map((coin, idx) => 

          <div className="card mb-2" style={{width: '18rem'}} key={idx}>
            <img src={coin.iconUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{coin.name}</h5>
              <p className="card-text">${coin.price}</p>
              <p className="card-text">24hr Change {coin.change} %</p>
              <a href="#" className="btn btn-primary">
                {coin.symbol}
              </a>
            </div>
          </div>
        
      )}
</div>
      
    </div>
  )
};

export default CoinList;
