import React from 'react';
import './reset.css';
import './style.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AllCategories from './components/AllCategories';
import List from './components/List';
import Pages from './components/Pages';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AllCategories/>
      <List/>
      <Pages/>
    </div>
  );
}

export default App;
