import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import About from './Pages/About/About';
import Home from './Pages/Home/index.jsx';
import InvestorRelation from './Pages/InvestorRelation/InvestorRelation';
import Product from './Pages/Product/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product:id" element={<Home />} />
            <Route path="/investor-relation" element={<InvestorRelation />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
