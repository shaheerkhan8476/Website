import './App.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </BrowserRouter>
  );
  }
export default App;
