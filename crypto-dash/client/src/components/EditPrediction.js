import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EditPrediction = (props) => {
  // to get the prediction's id from the URL and into the .get
  const { id } = useParams();
  console.log(id);

  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    // Put the id into the url
    axios
      .get(`http://localhost:5001/api/prediction/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setYear(response.data.year);
        setReason(response.data.reason);
      })

      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.err.errors);
      });
  }, []); // second arg (array) so component runs only 1 time, when it loads.

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5001/api/prediction/${id}`, {
        coinName: name,
        pricePrediction: price,
        predictionYear: year,
        predictionReason: reason,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <Link to="/"> Back to Home </Link>

      <div className="form-group col-6">
        <label htmlFor="coinName">Select a Cryptocurrency</label>

        <select
          className="form-control"
          id="theCoin"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        {errors.name ? (
          <p className="text-danger"> {errors.name.message} </p>
        ) : null}
        <br />

        <label htmlFor="pricePrediction">Price Prediction:</label>
        <input
          type="text"
          id="thePrice"
          value={price}
          className="form-group col-6"
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price ? (
          <p className="text-danger"> {errors.price.message} </p>
        ) : null}
        <br />

        <label htmlFor="predictionYear">Prediction Year: </label>
        <input
          type="text"
          id="theYear"
          value={year}
          className="form-group col-6"
          placeholder="Prediction Year"
          onChange={(e) => setYear(e.target.value)}
        />
        {errors.predictionYear && (
          <p className="text-danger">{errors.year.message}</p>
        )}
        <br />

        <label htmlFor="predictionReason">Prediction Reasons:</label>
        <input
          type="textarea"
          id="theReason"
          value={reason}
          className="form-group col-6"
          placeholder="Reasons"
          onChange={(e) => setReason(e.target.value)}
        />
        {errors.predictionReason && (
          <p className="text-danger">{errors.reason.message}</p>
        )}
        <br />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        value="Update Prediction"
      >
        Update Prediction
      </button>
    </form>
  );
};

export default EditPrediction;
