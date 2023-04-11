import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import AllProducts from './components/products/AllProducts';
import Detail from './components/products/Detail';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import Store from './components/pages/Store';
import Address from './components/profile/Address';
// import AuthContext from './components/authentication/Auth-context';
import NewAddress from './components/profile/New-address';
import Cart from './components/pages/Cart';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [headerChildren, setHeaderChildren] = React.useState(null);

  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false)

  const userAuth = () => {
    setUserLoggedIn(!isUserLoggedIn)
  }
  return (

    <div className="App">
      <BrowserRouter>
        <Header isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} isUserLoggedIn={isUserLoggedIn} userAuth={userAuth} >
          {headerChildren}
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile setHeaderChildren={setHeaderChildren} />} />
          <Route path="/store" element={<Store />} />
          <Route path="/address" element={<Address />} />
          <Route path="/new-address" element={<NewAddress />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
