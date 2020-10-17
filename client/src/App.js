import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import axios from "axios";
import Header from './components/layout/Header';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Articles from './components/Articles';


function App() {
  const [posts , setPosts] = useState([]);
  useEffect( () => { 
    axios
    .get("http://localhost:8080/articles")
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to="/" render={() => <Articles posts = {posts} /> }/>
      <Footer />
    </div>
  );
}

export default App;
