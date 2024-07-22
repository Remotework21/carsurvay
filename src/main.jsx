import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from './Survey';
import Results from './Results';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
