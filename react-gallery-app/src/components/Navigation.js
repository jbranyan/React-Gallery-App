import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {

    return(
        <header>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats' id='Cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs' id='Dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/computers' id='Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;


