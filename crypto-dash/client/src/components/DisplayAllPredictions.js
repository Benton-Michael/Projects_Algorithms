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
        <div className="col-6">
          <Link to="/new">Add a Prediction</Link>
          <br></br>
          <Link to="/coinData">View Your Dashboard</Link>
          <p className="atop-text">placeholder for above the table</p>
          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                {/* <th scope="col">#</th>
          <th scope="">dddd</th> */}
                <th scope="col">Cryptocurrency Name</th>
                <th scope="col">Predictions</th>
              </tr>
            </thead>
            <tbody>
              {allPredictions.map((prediction, index) => {
                return (
                  <tr>
                    <td>{prediction.coinName}</td>
                    <td>
                      <button>View</button>
                      <button>Edit</button>
                      <button>Delete</button>
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
