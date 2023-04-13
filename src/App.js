import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import Home from './Pages/Home/index.jsx';
import InvestorRelation from './Pages/InvestorRelation/InvestorRelation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product:id" element={<Home />} />
            <Route path="/investor-realation" element={<InvestorRelation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
