import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
