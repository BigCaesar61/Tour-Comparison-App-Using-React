//Task 1: App.jsx (Root Component)


import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Gallery from './Gallery';

const App = () => {
//route structure
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Gallery />} />
    </Routes>
  </Router>
  );
};

export default App;