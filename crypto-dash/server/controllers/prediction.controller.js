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

// removed inner key {} from alllPredictions
// the array can be returned with just response.data
const getAllPredictions = (req, res) => {
  Prediction.find()
    .then((allPredictions) => {
      res.json(allPredictions);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOnePrediction = (req, res) => {
  Prediction.findOne({ _id: req.params.id })
    .then((queriedPrediction) => {
      res.json(queriedPrediction);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Update
const updatePrediction = (req, res) => {
  Prediction.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPrediction) => {
      res.json({ updatedPrediction });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Delete
const deletePrediction = (req, res) => {
  Prediction.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewPrediction,
  getAllPredictions,
  getOnePrediction,
  updatePrediction,
  deletePrediction,
};
