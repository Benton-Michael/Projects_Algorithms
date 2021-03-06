const mongoose = require("mongoose");
const dbName = "coinPredictionDB";

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the MongoDB ${dbName} database`);
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
