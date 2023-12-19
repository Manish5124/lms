import React from 'react';
import './App.css';
import Home from './components/home/Home';
import LoginSignup from './components/loginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />   */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
