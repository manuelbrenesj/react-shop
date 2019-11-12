import React from 'react';
import './reset.css';
import './style.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import List from './components/list/List';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
