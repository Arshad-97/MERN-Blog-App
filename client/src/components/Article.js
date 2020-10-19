import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Axios from 'axios';
import spinner from './spinner-1.gif';
import {Link} from 'react-router-dom';

const Article = props => {
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname, setAuthorname] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:8080/articles/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setAuthorname(res.data.authorname),
                setArticle(res.data.article)
            ])
            .catch(error => console.log(error))

    }, [props])


    return (
        <MainContainer>
            {!title || !article || !authorname ? (<img src={spinner} alt="loading..." />
            ) : (
                    <>
                        <h1>{title}</h1>
                        <p>{article}</p>
                        <span className="badge badge-secondary">{authorname}</span>
                        <br />
                        <Link to="/" type="submit" className="btn btn-outline-success" >Back Home</Link>

                    </>
                )}
        </MainContainer>
    );
}

export default Article

//MainContainer
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h1{
      text-align: center;
      font-weight: 900;
      color: #008080;

  }

  img{
      display: block;
      margin: auto;
  }

  .btn-outline-success{
    margin-top: 2rem;
    background: #008080;
    color: #fff;
    &:hover{
        background: #98FB98;
        color: #008080;
    }
}
`;
