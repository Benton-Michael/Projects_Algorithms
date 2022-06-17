import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const DisplayAllPredictions = () => {
  const [allPredictions, setAllPredictions] = useState([]);
  useEffect(() => {
    // get request must go to PORT 5001
    axios
      .get("http://localhost:5001/api/prediction")
      .then((response) => {
        console.log(response.data);
        setAllPredictions(response.data);
        // console.log(allPredictions);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []); // the empty array for useEffect b/c we only want it to run once

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/new">Add a Prediction</Link>
          <br></br>
          <Link to="/coinData">View Current Coin Data</Link>
          <h1 className="atop-text">Cryptocurrency Dashboard</h1>
          <table className="table-striped table table-md table-hover table-bordered table-dark">
            <thead className="thead-dark">
              <tr>
                {/* <th scope="col">#</th>
          <th scope="">dddd</th> */}
                <th scope="col">Cryptocurrency Name</th>
                <th scope="col">Prediciton Date</th>
                <th scope="col">Predictions</th>
              </tr>
            </thead>
            <tbody>
              {allPredictions.map((prediction, index) => {
                return (
                  <tr key={prediction._id}>
                    <td>{prediction.coinName}</td>
                    <td></td>
                    <td>
                      <button className="btn btn-info">View</button>

                      <Link to={`/edit/${prediction._id}`}>
                        <button className="btn btn-secondary m-2">Edit</button>
                      </Link>

                      <button className="btn btn-warning">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllPredictions;