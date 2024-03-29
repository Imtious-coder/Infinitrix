import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/index.jsx';
import InvestorRelation from './Pages/InvestorRelation/InvestorRelation';
import Product from './Pages/Product/Product';
import SingleBlog from './Pages/SingleBlog/SingleBlog';

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
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/blog:id" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
