import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    active = {
        fontWeight: 'bold',
        color: 'pink'
    };
    
    header = {
        display: 'flex',
        justifyContent: 'space-evenly',
        listStyle: 'none'
    };

    render() {
        return(
            <div style={this.header}>
                <NavLink exact to='/' activeStyle={this.active}>
                    Home
                </NavLink>
                <NavLink exact to='/byID' activeStyle={this.active}>
                    Category By ID
                </NavLink>
                <NavLink exact to='/subcategories/ByStatusBySubject' activeStyle={this.active}>
                    Subcategories By Status And Subject
                </NavLink>
            </div>
        )
    }
}

export default Header;