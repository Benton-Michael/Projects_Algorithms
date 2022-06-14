const predictionController = require("../controllers/prediction.controller");

module.exports = (app) => {
  //   app.post("/api/prediction/", predictionController);
  //   app.get("/api/prediction", predictionController)

  app.post("/api/prediction/", predictionController.createNewPrediction);
  app.get("/api/prediction/", predictionController.getAllPredictions);
  app.get("/api/prediction/:id/", predictionController.getOnePrediction);
  app.put("/api/prediction/:id/", predictionController.updatePrediction);
  app.delete("/api/prediction/:id/", predictionController.deletePrediction);
};
