import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditPrediction = (props) => {
  // to get the prediction's id from the URL and into the .get
  const { id } = useParams();
  console.log(id);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [reason, setReason] = useState("");
  console.log(id);
  useEffect(() => {
    // Put the id into the url
    // when we feed in the req.body the name has to match what is in the model
    axios
      .get(`http://localhost:5001/api/prediction/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.coinName);
        setPrice(response.data.pricePrediction);
        setYear(response.data.predictionYear);
        setReason(response.data.predictionReason);
      })

      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  }, []); // second arg (array) so component runs only 1 time, when it loads.

  const updatePredHandler = (e) => {
    e.preventDefault();
    console.log("inside handler", name);

    axios
      .put(`http://localhost:5001/api/prediction/${id}`, {
        coinName: name,
        pricePrediction: price,
        predictionYear: year,
        predictionReason: reason,
      })
      .then((response) => {
        console.log('successful update');
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
  
      <form onSubmit={updatePredHandler}>
        <Link to="/"> Back to Home </Link>
        <div className="form-group col-6">
          <label htmlFor="coinName">Select a Cryptocurrency</label>

          <select
            className="update"
            id="name"
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

          {errors.coinName ? ( 
          <p className="text-danger">{errors.coinName.message}</p>
          ):null}

          {/* {errors.coinName && <p className="text-danger">{errors.coin.message}</p>} */}

          {/* {errors.coinName ? (
            <p className="text-danger"> {errors.coinName.message} </p>
          ) : null} */}
          <br />

          <label htmlFor="pricePrediction">Price Prediction:</label>
          <input
            type="text"
            id="price"
            value={price}
            className="update"
            onChange={(e) => setPrice(e.target.value)}
          />
          
          {errors.pricePrediction}

          {/* {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )} */}

          <br />

          <label htmlFor="predictionYear">Prediction Year: </label>
          <input
            type="text"
            id="year"
            value={year}
            className="update"
            placeholder="Prediction Year"
            onChange={(e) => setYear(e.target.value)}
          />

          {errors.year && <p className="text-danger">{errors.year.message}</p>}

          <br />

          <label htmlFor="predictionReason">Prediction Reasons:</label>
          <input
            type="textarea"
            id="reason"
            value={reason}
            className="update"
            placeholder="Reasons"
            onChange={(e) => setReason(e.target.value)}
          />

          {errors.reason && (
            <p className="text-danger">{errors.predictionReason.message}</p>
          )}

          <br />
          {/* @ 1:11:41 --- Begin HERE: After running - confirm form info is in the state variable */}
          {/* TO DO: submit handler */}
          {/* TO DO: Delete Funtionality here? */}
          {/* Note: this is update component from movies app */}
          {/* </div> */}
          <button
            type="submit"
            className="btn btn-primary"
            placeholder="Update Prediction"
      />
        </div>
      </form>
    
  );
};

export default EditPrediction;
