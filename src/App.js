import React from 'react';
import {HashRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/store" element={<OurStore />}></Route>
            <Route path='/product-details' element={<SingleProduct/>}/>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/single-blogs" element={<SingleBlog />}></Route>
            <Route path="/compare" element={<CompareProducts />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forget-password" element={<ForgetPassword />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/privacy" element={<PrivacyPolicy />}></Route>
            <Route path="/terms" element={<TermAndCondition />}></Route>
            <Route path="/shipping" element={<ShippingPolicy />}></Route>
            <Route path="/refund" element={<RefundPolicy />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
