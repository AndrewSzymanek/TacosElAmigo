import React, { Component } from 'react';

class NavBar extends React.Component {
  render() {
    return (
        <div>
               <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="./Components/menu.js">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        </div>
        
    );
  }
}
 
export default NavBar;