import React, {Component} from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {email, username, password} = this.state;
    const {signUp, heading} = this.props;

    return (
      <div className="container">
        <form>
          <h2>{heading}</h2>
          {signUp && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" value={email} 
              id="email" name="email" onChange={this.handleChange} />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" value={username} 
            id="username" name="username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" value={password} 
            id="password" name="password" onChange={this.handleChange} />
          </div>
          <button className="btn btn-outline-dark btn-lg" type="submit">
            {heading}
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;