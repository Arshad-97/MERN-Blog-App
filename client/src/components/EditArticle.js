import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import styled from 'styled-components';

const EditArticle = props => {
    const [title, setTitle] = useState("")
    const [article, setArticle] = useState("")
    const [authorname, setAuthorname] = useState("")
    const [message, setMessage] = useState("");

    const changeOnClick = e => {
        e.preventDefault();

        const Articles = {
            title,
            article,
            authorname
        };

        setTitle("");
        setArticle("");
        setAuthorname("");

        Axios.put(`http://localhost:8080/articles/update/${props.match.params.id}`, Articles)
            .then(res => setMessage(res.data))
            .catch(error => { console.error(error) })
    };

    useEffect(() => {
        Axios.get(`http://localhost:8080/articles/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setAuthorname(res.data.authorname),
                setArticle(res.data.article)
            ])
            .catch(error => console.log(error))

    }, [])


    return (
        <AddArticleContainer>
            <div className="container">
                <h1>Update Article</h1>
                <span className="message">{message}</span>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="authorname">Author Name</label>
                        <input type="text" value={authorname} onChange={e => setAuthorname(e.target.value)}
                            className="form-control" placeholder="Enter author name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                            className="form-control" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article">Article</label>
                        <textarea value={article} onChange={e => setArticle(e.target.value)}
                            className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success" >Update</button>
                </form>
            </div>
        </AddArticleContainer>
    )
}

export default EditArticle;

//MainContainer
const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1{
        font-weight: 900;
        color: #008080;
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

    .message{
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }
`;