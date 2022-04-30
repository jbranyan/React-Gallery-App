import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props.selectLink);

    selectLink = (e) => {
        console.log(e.target.id);
        const query = e.target.id;
        this.getPhotos(query);
      }

    return(
        <header>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats' onClick={this.selectLink} id='Cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={this.selectLink} id='Dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/computers' onClick={this.selectLink} id='Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}



export default Navigation;


