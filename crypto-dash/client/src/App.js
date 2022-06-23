import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Button from '@mui/icons-material'
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // confirm
import DisplayAllPredictions from "./components/DisplayAllPredictions";
import PredictionForm from "./components/PredictionForm";
import CoinList from "./components/CoinList";
import EditPrediction from "./components/EditPrediction";
import DisplayPredsAndData from "./views/DisplayPredsAndData";
import Header from "./components/Header";
import PredictionDetails from "./components/PredictionDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            
          <Route path="/" element={<DisplayPredsAndData />} />
          <Route path="/coinData" element={<CoinList />} />
          <Route path="/new" element={<PredictionForm />} />
          <Route path="/prediction/:id" element={<PredictionDetails />} />
          {/* we get to edit through the displayAll page */}
          <Route path="/edit/:id" element={<EditPrediction />} />
          {/* <Route path="/prediction/:id" element={<PredictionDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
