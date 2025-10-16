import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
