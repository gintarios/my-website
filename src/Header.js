import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';

const Header = () => {
    return (
        <div className='section-header'>

            <div className='navi'>
                <Link to='/'> <h3>Home</h3> </Link>
                <Link to='/about'><h3>About Me</h3></Link>
                <Link to='/myProjects'><h3>My Projects</h3></Link>
                <Link to='/contactMe'><h3>Contact Me</h3></Link>
            </div>

            <div className='navi-content'>
                <Route path='/' />
                <Route path='/about' />
                <Route path='/myProjects' />
                <Route path='/contactMe' component={ContactMe} />

            </div>

            <h1>Gintare Zolubaite</h1>
            <h2> Welcome to my website. </h2>
        </div>
    )
}

export default Header;