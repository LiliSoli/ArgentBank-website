// src/App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';
import Header from '@components/Header/Header';
import Home from '@pages/Home/Home'; 
import SignIn from '@pages/SignIn/SignIn'; 
// import User from '@pages/User/User'

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/SignIn" element={<SignIn />} />
          {/* <Route path="/User" element={<User />} /> */}
        </Routes>
      </Router>
    // </Provider>
  );
}

export default App;
