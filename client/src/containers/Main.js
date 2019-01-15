import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import NewPostForm from '../components/NewPostForm';
import ShowPost from './ShowPost';
import {authUser} from '../store/actions/auth';
import {newPost} from '../store/actions/posts';

const Main = props => {
  const {authUser, errors, currentUser, newPost} = props;

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => {
          return (
            <Homepage currentUser={currentUser} {...props} />
          );
        }} />
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
        <Route exact path="/new" render={props => {
          return (
            <NewPostForm newPost={newPost} {...props} />
          );
        }} />
        <Route exact path="/post/:id" render={props => {
          return (
            <ShowPost {...props} />
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

export default withRouter(connect(mapStateToProps, {authUser, newPost})(Main));