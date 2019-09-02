import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Search from './components/Search'

import './App.css';

function App() {
  return (
    <div className="container main">

    <Header />
    <Menu />
    <Search />
    </div>
  )
}

export default App;
