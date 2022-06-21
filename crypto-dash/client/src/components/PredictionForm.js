import "../App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PredictionForm = () => {
  // Should I try to write this as a funcitonal component? Why vs. why not
  // function newPrediction() {
  // const PredictionForm = (props) => {

  const [coinName, setCoinName] = useState("");
  const [pricePrediction, setPricePrediction] = useState(0);
  const [predictionYear, setPredictionYear] = useState(2022);
  const [predictionReason, setPredictionReason] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/api/prediction/", {
        coinName,
        pricePrediction,
        predictionYear,
        predictionReason,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error response data", err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h2>Create a new Prediction</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group col-6 align-items flex-direction: column">
          <label htmlFor="coinName">Select a Cryptocurrency</label>
          <select
            className="form-control"
            id="theCoin"
            onChange={(e) => setCoinName(e.target.value)}
          >
            <option value="">Select a Crypto</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Cardano">Cardano</option>
            <option value="Ripple">Ripple</option>
            <option value="Solana">Solana</option>
            <option value="Polkadot">Polkadot</option>
            <option value="Polygon">Polygon</option>
            <option value="Chainlink">Chainlink </option>
            <option value="Monero">Monero </option>
            <option value="Decentraland">Decentraland </option>
            <option value="Filecoin">Filecoin</option>
            <option value="Axie Infinity shards">Axie Infinity shards</option>
            <option value="Basic Attention Token">Basic Attention Token</option>
          </select>
          {errors.coinName && (
            <p className="text-danger">{errors.coinName.message}</p>
          )}
          <br />
          <label htmlFor="pricePrediction">Price Prediction:</label>
          <input
            type="text"
            id="thePrice"
            value={pricePrediction}
            className="form-group col-6"
            placeholder="Future price in $USD"
            onChange={(e) => setPricePrediction(e.target.value)}
          />
          {errors.pricePrediction && (
            <p className="text-danger">{errors.pricePrediction.message}</p>
          )}
          <br />

          <label htmlFor="predictionYear">Prediction Year: </label>
          <input
            type="text"
            id="theYear"
            value={predictionYear}
            className="form-group col-6"
            placeholder="Prediction Year"
            onChange={(e) => setPredictionYear(e.target.value)}
          />
          {errors.predictionYear && (
            <p className="text-danger">{errors.predictionYear.message}</p>
            // Error message can also be written using the ternary operator
          )}
          <br />

          <label htmlFor="predictionReason">Prediction Reasons:</label>
          <input
            type="textarea"
            id="theReason"
            value={predictionReason}
            className="form-group col-6"
            placeholder="Reasons"
            onChange={(e) => setPredictionReason(e.target.value)}
          />
          {errors.predictionReason && (
            <p className="text-danger">{errors.predictionReason.message}</p>
          )}
          <br />

          <button
            className="submit btn btn-primary"
            type="submit"
            value="Add Prediction"
          >
            {" "}
            Add Prediction{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
