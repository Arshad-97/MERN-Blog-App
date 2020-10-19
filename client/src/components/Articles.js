import React, {useState} from 'react'
import styled from "styled-components";
import spinner from '././spinner-1.gif';
import { Link } from 'react-router-dom';
import Axios from 'axios';


const Articles = ({ posts }) => {
    const [article, setArticle] = useState([])
    //delete article by ID
    const deleteArticle = id =>{
        Axios.delete(`http://localhost:8080/articles/${id}`)
            .then(res => alert(res.data))
            setArticle(article.filter(elem => elem._id !==id))
    }
    return (
        <MainContainer>
            {!posts.length ? (<img src={spinner} alt="loading..." />
            ) : (
                    posts.map((articles, key) => (
                        <div className="container" key={key}>
                            <Link to={{ 
                                pathname:`/article/${articles._id}`
                            }}>
                                <h2>{articles.title}</h2>
                            </Link>
                            <p>{articles.article}</p>
                            <span className="badge badge-secondary p-2">{articles.authorname}</span>
                            <div className="row my-5">
                                <div className="col-sm-2">
                                    <Link to={`/update/${articles._id}`}className="btn btn-outline-success">Edit Article</Link>
                                </div>
                                <div className="col-sm-2">
                                    <Link to="/" onClick={() => deleteArticle(articles._id)} className="btn btn-outline-danger">Delete Article</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
        </MainContainer>
    )
};

export default Articles;

// MainContainer
const MainContainer = styled.div`
    margin : 7rem;

    img {
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
`;
