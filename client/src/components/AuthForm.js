import React, {Component} from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {signUp} = this.props;

    return (
      <div>
        AuthForm
        {signUp && (
          <div>signup</div>
        )}
      </div>
    );
  }
}

export default AuthForm;