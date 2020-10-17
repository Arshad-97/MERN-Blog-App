import React from 'react'
import styled from 'styled-components';

const AddArticle = () => {
    return (
        <AddArticleContainer>
            <div className="container">
                <h1>Add New Article</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="authorname">Author Name</label>
                        <input type="text" className="form-control" placeholder="Enter author name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" placeholder="Enter title" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="article">Article</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Post Article</button>
                </form>
            </div>
        </AddArticleContainer>
    )
}

export default AddArticle;

//MainContainer
const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;
`;