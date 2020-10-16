import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/NavBar';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
