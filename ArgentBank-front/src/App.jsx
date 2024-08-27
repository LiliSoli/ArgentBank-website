// src/App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import Home from '@pages/Home/Home';
import SignIn from '@pages/SignIn/SignIn';
import User from '@pages/User/User';
import '@assets/style/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
