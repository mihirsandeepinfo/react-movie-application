import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navlist">
          <li className="navlist_right">MIFO</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Home</li>
        </ul>
      </div>

    );
  }
}
