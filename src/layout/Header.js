import React, { Component } from 'react';

class Header extends Component {
  state = {  } 
    render() { 
      return (
        <header>
          <div className="header__nav">
            <a href="#!" className="brand__logo">
              Creative Movie App
            </a>
            <ul>
              <li>
                <a href="#!">Movies</a>
              </li>
              <li>
                <a href="#!">Serials</a>
              </li>
              <li>
                <a href="#!">Logout</a>
              </li>
            </ul>
          </div>
          <div className="main__head">
            <a href="#!">
              <img
                src="https://icon-library.com/images/play-icon-png-transparent/play-icon-png-transparent-10.jpg"
                alt="movies"
              />
            </a>
          </div>
        </header>
      );
  }
}
 
export default Header;