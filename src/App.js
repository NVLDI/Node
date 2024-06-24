import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AppBar from './components/appBar/AppBar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <AppBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
