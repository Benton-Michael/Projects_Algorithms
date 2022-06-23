import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Paper } from '@material-ui/core';
// import { DataGrid } from '@mui/x-data-grid';

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

  const handleDeletePred = (idFromBelow) => {
    axios
      .delete(`http://localhost:5001/api/prediction/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting prediction");
        console.log(response);
        const filteredPredictions = allPredictions.filter((prediction) => {
          return prediction._id !== idFromBelow;
        });
        setAllPredictions(filteredPredictions);
      })

      .catch((err) => {
        console.log("error deleting prediction", err.response);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/new">Add a Prediction</Link>
          <br></br>
          <Link to="/coinData">View Current Coin Data</Link>
          <h1 className="atop-text">Your Predictions</h1>
          <table className="table-striped table table-md table-hover table-bordered table-dark">
            <thead className="thead-dark">
              <tr>
                {/* <th scope="col">#</th>
          <th scope="">dddd</th> */}
                <th scope="col">Cryptocurrency Name</th>
                <th scope="col">Prediction Year</th>
                <th scope="col">Prediction Actions</th>
              </tr>
            </thead>
            <tbody>
              {allPredictions.map((prediction, index) => {
                return (
                  <tr key={prediction._id}>
                    <td>{prediction.coinName}</td>
                    <td>{prediction.predictionYear}</td>
                    <td>
                      <Link to={`/prediction/${prediction._id}`}>
                        <button className="btn btn-info m-2">View</button>
                      </Link>
                      <Link to={`/edit/${prediction._id}`}>
                        <button className="btn btn-info m-2">Edit</button>
                      </Link>
                      <Link to ="">
                      <button onClick={() => handleDeletePred(prediction._id)}
                        className="btn btn-warning m-2"
                      >
                        Delete
                      </button>
                      </Link>
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
