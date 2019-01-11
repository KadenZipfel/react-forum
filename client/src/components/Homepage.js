import React from 'react';
import {Link} from 'react-router-dom';
import Timeline from './Timeline';

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated) {
    return (
      <div className="container">
        <h1>Welcome to Forum</h1>
        <h4>Don't have an account yet?</h4>
        <Link to="/signup" className="btn btn-outline-dark">Sign Up</Link>
        <Timeline />
      </div>
    );
  }
  return (
    <div>
      <Timeline />
    </div>
  );
};

export default Homepage;