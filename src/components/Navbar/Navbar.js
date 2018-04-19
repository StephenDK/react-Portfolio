import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
    <nav className='navbar navbar-default'>
        <div className='container-fluid navbar-custom'>
            <a className='navbar-brand logo'href='/'>Stephen Klein</a>
            <ul className='nav navbar-nav navbar-right navbar-right-custom tabs'>
                <li className='tab'><a href='/'>About</a></li>
                <li className='tab'><a href='/contact'>Contact</a></li>
                <li className='tab'>Projects</li>
            </ul>
        </div>
    </nav>
);


export default Navbar; 