import './App.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExperienceScreen from './screens/ExperienceScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="experiences" element={<ExperienceScreen/>} />
      </Routes>
    </BrowserRouter>
  );
  }
export default App;
