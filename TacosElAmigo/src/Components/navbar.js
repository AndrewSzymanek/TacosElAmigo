import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './home';
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
                  pathname: '/home'
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
          <Route path= "/home" exact component = {Home} />
          <Route path = "/menu" exact component={Menu}/>
          <Route path = "/location" exact component ={Location} />
        <Route path = "/contact" exact component ={Contact} />
        </div>
        
    );
  }
}

export default NavBar;