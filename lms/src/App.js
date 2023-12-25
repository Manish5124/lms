import react from 'react';
import './App.css';
import Home from './components/home/Home';
import LoginSignup from './components/loginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppProvider from './context/AppProvider';
import Whislists from './components/whislists/Whislists';





function App() {
  return (
    <div className="App">
      <AppProvider>
      <Header/>
       {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/book" element={<Books />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />  
          <Route path="/fav" element={<Whislists />} />
        </Routes>
      {/* </Router> */}
      <Footer/>
      </AppProvider>
    </div>
  );
}

export default App;
