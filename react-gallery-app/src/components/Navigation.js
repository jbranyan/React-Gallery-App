import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navigation extends Component {

    render(){
        return(
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats' onClick={this.props.navSelection} id='Cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={this.props.navSelection} id='Dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/computers' onClick={this.props.navSelection} id='Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        );
    }

}

export default withRouter(Navigation);


