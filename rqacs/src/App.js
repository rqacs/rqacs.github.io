import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Footer/>
    </Router>
      
  );
}

export default App;
