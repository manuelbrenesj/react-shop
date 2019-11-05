import React from 'react';
import './reset.css';
import './style.css';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AllCategories from './components/AllCategories';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AllCategories/>
    </div>
  );
}

export default App;
