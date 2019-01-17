import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {deleteComment, getPost} from '../store/actions/posts';

class Comment extends PureComponent {
  constructor(props) {
    super(props);
  }

  clearComment = () => {
    this.props.deleteComment(this.props.post._id, this.props.id);
    this.props.getPost(this.props.post._id);
  }

  render() {
    const {text} = this.props;

    return (
      <div>
        <li className="list-group-item">
          <p>{text}</p>
        </li>
        <a className="btn btn-danger" onClick={this.clearComment}>Delete</a>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    post: state.post
  };
};

export default connect(mapStateToProps, {deleteComment, getPost})(Comment);