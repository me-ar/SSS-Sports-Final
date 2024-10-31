import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Details from './Pages/Details';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
