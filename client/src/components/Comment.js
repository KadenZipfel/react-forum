import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {deleteComment, getPost} from '../store/actions/posts';
import { stat } from 'fs';

class Comment extends PureComponent {
  constructor(props) {
    super(props);
  }

  clearComment = () => {
    this.props.deleteComment(this.props.post._id, this.props.id);
    this.props.getPost(this.props.post._id);
  }

  render() {
    const {text, author, currentUser} = this.props;

    return (
      <div>
        <li className="list-group-item">
          <p>{text}</p>
        </li>
        {currentUser.isAuthenticated && (
          author == currentUser.user.id && (
            <a className="btn btn-danger" onClick={this.clearComment}>Delete</a>
          )
        )}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    post: state.post,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {deleteComment, getPost})(Comment);