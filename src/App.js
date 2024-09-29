import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
