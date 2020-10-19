import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import Header from './components/layout/Header';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Articles from './components/Articles';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Axios from 'axios';

function App() {
  const [posts , setPosts] = useState([]);
  useEffect( () => { 
    Axios
    .get("http://localhost:8080/articles")
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts = {posts} /> }/>
      <Route path="/article/:id" render={(props) => <Article {...props} posts = {posts} /> }/>
      <Route path="/add-article" component={AddArticle}/> 
      <Route path="/edit-article" component={EditArticle}/> 
      <Footer /> 
    </div>
  );
}

export default App;
