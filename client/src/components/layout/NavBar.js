import React from 'react';
import styled from 'styled-components';
import logo from './../blog-logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
                <a className="navbar-brand" href="#">
                    <img style={{ width: "50px" }} src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="add-article">Add Article</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}

export default NavBar;

//NAVBAR CONTAINER
const NavbarContainer = styled.div`
 background: #008080;
 .nav-link {
    color: #fff !important;
    &:hover{
        background: #00FFFF;
    }
 }
 
`;