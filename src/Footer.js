import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='section-footer'>

            <div className='footer-container'>
                <div className='footer-box1'>
                    <Link to='/' > <p> Github </p></Link>
                    <Link to='/' > <p> LinkedIn </p></Link>
                    <Link to='/' > <p> Email </p></Link>
                </div>
                <div className='footer-box2'>
                    <Link to='/' > <p> Made by Gintare Zolubaite 2018 </p></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer;