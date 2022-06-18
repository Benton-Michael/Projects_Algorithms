import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const PredictionDetails = (props) => {
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [reason, setReason] = useState("");

  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/prediction/${id}`)
      .then((response) => {
        console.log("Prediction", response.data);
        setName(response.data.coinName);
        setPrice(response.data.pricePrediction);
        setYear(response.data.predictionYear);
        setReason(response.data.predictionReason);
      })
      .catch((err) => {
        console.log("Error", err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  }, []);
  return (
    <div className="card mb-3">
      <Link to="/"> Back to Home </Link>
      <div class="card">
        <h5 class="card-header">Prediction Details</h5>
        <div class="card-body">
          <h3 class="card-title">{name}</h3>

          <p class="card-text">{price}</p>
          <p class="card-text">{year}</p>
          <p class="card-text">{reason}</p>

          <a href="/" class="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PredictionDetails;
