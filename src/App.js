import React from 'react';
import './App.css';
import Basket from './components/Basket'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Donate from './pages/donate'
import Products from './pages/products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Basket>
    
    <React.Fragment>
    <Router>
    <Routes>
    <Route exact path='/contact' element={<Contact />}/>
    <Route exact path='/donate' element={<Donate />}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/' element={<Home/>}/>
    </Routes>
    </Router>
    </React.Fragment>

    </Basket>
  
  
  );
}

export default App;
