const mongoose = require("mongoose");

const PredictionsSchema = new mongoose.Schema(
  {
    coinName: {
      type: String,
      required: [true, "Please select a coin"],
      // menu options for the user
      enum: [
        "Bitcoin",
        "Ethereum",
        "Cardano",
        "Ripple",
        "Solana",
        "Polkadot",
        "Polygon",
        "Chainlink",
        "Monero",
        "Decentraland",
        "Filecoin",
        "Axie Infinity shards",
        "Basic Attention Token",
      ],
    },
    pricePrediction: {
      type: String,
      required: [true, "The predicted price is required"],
    },
    predictionYear: {
      type: Number,
      min: [2022, "Price predictions are for future years!"],
    },

    predictionReasons: {
      type: String,
      required: [true, "Please enter the reason for you price prediction"],
      maxlength: [500, "Please limit your comment to 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Predictions = mongoose.model("Predictions", PredictionsSchema);

module.exports = Predictions;
