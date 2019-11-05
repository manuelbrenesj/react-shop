import React from 'react';
import './reset.css';
import './style.css';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AllCategories from './components/AllCategories';
import List from './components/List';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AllCategories/>
      <List/>
    </div>
  );
}

export default App;
