import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'; 
import RegisterLogin from './pages/register-login/register-login';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-login" element={<RegisterLogin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
