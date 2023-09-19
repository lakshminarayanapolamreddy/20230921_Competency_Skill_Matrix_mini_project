import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Signup from './components/signup'
import Signin from './components/signin'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;