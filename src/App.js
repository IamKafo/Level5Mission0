import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Products from './Components/Products'
import Login from './Components/Login'
import Contact from './Components/Contact'

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
