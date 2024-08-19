// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import SignIn from './pages/SignIn'; 
import User from '.pages/User'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SignIn />} />
          <Route path="/about" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
