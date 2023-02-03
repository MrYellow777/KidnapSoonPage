import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SimplePage } from './SimplePage.js';
import { Donut } from './Donut.js';
import "./Donut.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SimplePage/>}/>
        <Route path='/donut' element={<Donut/>}/>
      </Routes>
    </Router>
  );
}

export default App;