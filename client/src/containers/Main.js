import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';

const Main = props => {
  const {authUser, errors} = props;

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" render={props => {
          return (
            <AuthForm heading="Log in" onAuth={authUser} errors={errors} {...props} />
          );
        }} />
        <Route exact path="/signup" render={props => {
          return (
            <AuthForm signUp heading="Signup" onAuth={authUser} errors={errors} {...props} />
          );
        }} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
};

export default withRouter(connect(mapStateToProps, {authUser})(Main));