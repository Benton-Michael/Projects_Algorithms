import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayAllPredictions from "./components/DisplayAllPredictions";
import PredictionForm from "./components/PredictionForm";
import CoinList from "./components/CoinList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAllPredictions />} />
          <Route path="/coinData" element={<CoinList />} />
          <Route path="/new" element={<PredictionForm />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
