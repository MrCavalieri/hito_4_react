import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import Home from './components/Home'; // Comentar
// import LoginPage from './components/Login';
// import RegisterPage from './components/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
