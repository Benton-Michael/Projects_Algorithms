import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayAllPredictions from "./components/DisplayAllPredictions";
import PredictionForm from "./components/PredictionForm";
import CoinList from "./components/CoinList";
import EditPrediction from "./components/EditPrediction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAllPredictions />} />
          <Route path="/coinData" element={<CoinList />} />
          <Route path="/new" element={<PredictionForm />} />
          {/* we get to edit through the displayAll page */}
          <Route path="/edit/:id" element={<EditPrediction /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
