import React from 'react'
import styled from "styled-components";
import spinner from '././spinner-1.gif';


const Articles = ({ posts }) => {
    return (
        <MainContainer>
            {!posts.length ? (<img src={spinner} alt="loading..." />
            ) : (
                    posts.map((articles, key) => (
                        <div className="container">
                            <h2>{articles.title}</h2>
                            <p>{articles.article}</p>
                            <span className="badge badge-secondary p-2">{articles.authorname}</span>
                            <div className="row my-5">
                                <div className="col-sm-2">
                                    <a className="btn btn-outline-success">Edit Article</a>
                                </div>
                                <div className="col-sm-2">
                                    <a className="btn btn-outline-danger">Delete Article</a>
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
