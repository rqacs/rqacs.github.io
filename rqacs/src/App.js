import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Template from './components/template/Template';

function App() {
  return (
    <Router>
      <Template/>
    </Router>
      
  );
}

export default App;
