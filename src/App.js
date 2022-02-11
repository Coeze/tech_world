import React from 'react';
import './App.css';
import Basket from './components/Basket'
import BasketItem from './components/basket_item';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Donate from './pages/donate'
import Products from './pages/products'
import Checkout from './pages/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Basket>
    <BasketItem>
    <React.Fragment>
    <Router>
    <Routes>
    <Route exact path='/contact' element={<Contact />}/>
    <Route exact path='/donate' element={<Donate />}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/checkout' element={<Checkout/>}/>
    <Route exact path='/' element={<Home/>}/>
    </Routes>
    </Router>
    </React.Fragment>
</BasketItem>
    </Basket>
  
  
  );
}

export default App;
