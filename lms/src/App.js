import React from 'react';
import './App.css';
import Home from './components/home/Home';
import LoginSignup from './components/loginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';



function App() {
  return (
    <div className="App">
      <Header/>
       <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Books />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />  
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
