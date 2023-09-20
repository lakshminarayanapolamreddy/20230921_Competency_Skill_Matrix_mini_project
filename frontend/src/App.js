import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import SignUpForm from './components/login/signup.js';
import SignInForm from './components/login/signin.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
