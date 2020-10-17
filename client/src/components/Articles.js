import React from 'react'

const Articles = ({posts}) => {
    return (
        <div>
            Welcome to the article components...
            {posts.map((articles , key) => (
            <div>
            <h2>{articles.title}</h2>
            <p>{articles.article}</p>
            <span>{articles.authorname}</span>
            </div>
            ))}
        </div>
    )
}

export default Articles;
