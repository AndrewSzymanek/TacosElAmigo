import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Menu from './menu';
import Location from './location';
import Contact from './contact';


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
          <Route path = "/menu"  component={Menu}/>
          <Route path = "/location" exact component ={Location} />
        <Route path = "/contact" exact component ={Contact} />
        </div>
        
    );
  }
}

export default NavBar;