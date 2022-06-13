const predictionController = require("../controllers/prediction.controller");

module.exports = (app) => {
//   app.post("/api/prediction/", predictionController);
//   app.get("/api/prediction", predictionController)

    app.post("/api/prediction/", predictionController.createNewPrediction);
    app.get("/api/prediction/", predictionController.getAllPredictions);
    app.get("/api/prediction/:id/", predictionController.getOnePrediction);

};
