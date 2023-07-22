import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Cart from './Cart';
import LogIn from './LogIn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './SignUp';
import Suggestion from './Suggestion';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<> <Header/> <Home/> <Footer/> </>} />
        <Route path='/cart' element={<> <Header/> <Cart/> <Footer/> </>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/suggestion' element={<Suggestion/>} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
