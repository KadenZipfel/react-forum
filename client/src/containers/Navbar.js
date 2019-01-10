import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Forum
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="px-3">
              <Link to="/new">New Post</Link>
            </li>
            <li className="px-3">
              <Link to="/signup">Sign up</Link>
            </li>
            <li className="px-3">
              <Link to="/signin">Log in</Link>
            </li>
            <li className="px-3">
              <Link to="/signout">Log out</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;