import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Menu from './Components/menu';


class NavBar extends Component {
  render() {
    return (
        <div>
          <header>
            <ul id="nav">
                <li><Link to={{
                  pathname: '/'
                }}>Home</Link></li>
                <li><Link to={{
                  pathname: '/menu'
                }}>Menu</Link></li>
                    <li><Link to={{
                  pathname: '/location'
                }}>Location</Link></li>
                    <li><Link to={{
                  pathname: '/contact'
                }}>Contact</Link></li>
            </ul>        
          </header>   
          <Route path="/menu" exact component={Menu}/>
        </div>
        
    );
  }
}

export default NavBar;