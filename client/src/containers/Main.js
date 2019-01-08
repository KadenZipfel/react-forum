import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = props => {
  const {} = props;

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={AuthForm} />
        <Route exact path="/signup" render={props => <AuthForm signUp />} />
      </Switch>
    </div>
  );
};

export default Main;