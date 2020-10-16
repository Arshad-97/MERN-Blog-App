import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
