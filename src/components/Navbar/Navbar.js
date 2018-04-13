import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
    <nav className='navbar navbar-default'>
        <div className='container-fluid navbar-custom'>
            <a className='navbar-brand logo'href='/'>Stephen Klein</a>
            <ul className='nav navbar-nav navbar-right navbar-right-custom tabs'>
                <li className={window.location.path === "/" || window.location.pathname === "/about" ? "active": "" }>
                <Link to ="/about">About</Link>
                </li>
                <li className='tab'>Contact</li>
                <li className='tab'>Projects</li>
            </ul>
        </div>
    </nav>
);


export default Navbar; 