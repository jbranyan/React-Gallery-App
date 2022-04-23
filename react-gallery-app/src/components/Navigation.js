import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <header>
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Navigation;


