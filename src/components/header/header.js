import React, { Fragment } from 'react';
import { Navbar } from 'react-materialize';
import { Link } from "react-router-dom";
import './header.css';
import logo from './menu-logo.svg';

const logoImg = (<Link to="/">
                    <img className={'logo-navbar'} alt={'logo quiz in navbar'} src={logo}/>
                </Link>);

const Header = () => {
    return (
        <Fragment>
            <Navbar brand={logoImg} alignLinks="right" className={'navbar'}>

            <Link to="/solo" className={'menu-options'} >Solo Quiz</Link>

            {/*<Link to="/lan" className={'menu-options'} >Versus IA Quiz</Link>*/}

            </Navbar>
        </Fragment>
    );
};

export default Header;