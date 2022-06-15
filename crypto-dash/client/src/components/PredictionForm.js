import { Link } from "react-router-dom";

const PredictionForm = () => {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <form>
        <div className="form-group col-6">
          <label htmlFor="select-coinName">Select Cryptocurrency</label>
          <select class="form-control" id="select-coinName">
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>Cardano</option>
            <option>Ripple</option>
            <option>Solana</option>
            <option>Polkadot</option>
            <option>Polygon</option>
            <option>Chainlink </option>
            <option>Monero </option>
            <option>Decentraland </option>
            <option>Filecoin</option>
            <option>Axie Infinity shards</option>
            <option>Basic Attention Token</option>
          </select>
          <label htmlFor="pricePrediction">Price Prediction:</label>
          <input
            type="text"
            className="form-group col-6"
            placeholder="Future price in $USD"
          />

          <label htmlFor="predictionYear" className="form-group col-6">
            Prediction Year
          </label>
          <input
            type="text"
            className="form-group col-6"
            placeholder="Prediction Year"
          />

          <label htmlFor="predictionReason" className="form-group col-6">
            Rationale
          </label>
          <input
            type="textarea"
            className="form-group col-6"
            placeholder="Prediction Reasons"
          />
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
