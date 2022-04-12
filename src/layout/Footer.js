import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="main__foot">
          <a href="#!">
            <img
              src="https://icon-library.com/images/play-icon-png-transparent/play-icon-png-transparent-10.jpg"
              alt="movies"
            />
          </a>
        </div>
				<div className="footer__info">
					<h2>&copy;{new Date().getFullYear()} Copyright Reserved</h2>
				</div>
      </div>
    );
  }
}

export default Footer;
