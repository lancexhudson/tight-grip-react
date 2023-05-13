import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
