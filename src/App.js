import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import AllProducts from './components/products/AllProducts';
import Detail from './components/detail/Detail';
import Footer from './components/footer/Footer';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setIsLoginOpen={setIsLoginOpen} setIsRegisterOpen={setIsRegisterOpen} />
        <Routes>
          <Route path="/" element={<Home isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<Detail />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
