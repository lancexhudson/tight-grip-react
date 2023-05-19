import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Bio from './components/HeroBio';
import Shows from './components/HeroShows';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bio" exact element={<Bio />} />
          <Route path="/shows" exact element={<Shows />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
