const Prediction = require("../models/predictions.model");

const createNewPrediction = (req, res) => {
  // CRUD operations
  // Create
  Prediction.create(req.body)
    .then((newPrediction) => {
      res.json({ newPrediction });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Read
const getAllPredictions = (req, res) => {
  Prediction.find()
    .then((allPredictions) => {
      res.json({ allPredictions });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Update to be used for detail and update
const getOnePrediction = (req, res) => {
    Prediction.findOne({ _id: req.params.id })
    .then((queriedPrediction) => {
        res.json({ queriedPrediction });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

module.exports = { createNewPrediction, getAllPredictions, getOnePrediction };
