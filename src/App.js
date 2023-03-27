import React from 'react';
import './App.css';
import Content from './components/Content';
import Cart from './components/Cart';
import Order from './components/Orders';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from 'react-use-cart';

function App(){
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Content />}exact />
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/Order" element={<Order/>}/>
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
};

export default App;
