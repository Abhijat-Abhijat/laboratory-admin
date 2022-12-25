import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import "../src/styles/header.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
