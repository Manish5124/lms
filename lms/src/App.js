import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import Home from './components/home/Home';
import LoginSignup from './components/loginSignup/LoginSignup';
import { Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppProvider from './context/AppProvider';
import Whislists from './components/whislists/Whislists';

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
      <AppProvider>
      <Header/>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/book" element={<Books />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />  
          <Route path="/fav" element={<Whislists />} />
        </Routes>
      <Footer/>
      </AppProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
