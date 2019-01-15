import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost, removePost, deletePost} from '../store/actions/posts';
import CommentBox from '../components/CommentBox';

class ShowPost extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.removePost(this.props.post._id);
  }

  clearPost = () => {
    this.props.deletePost(this.props.post._id);
    this.props.history.push('/');
  }

  render() {
    const {post, removePost, deletePost, currentUser} = this.props;

    if(post) {
      return (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {currentUser.isAuthenticated && (
            currentUser.user.id == post.author && (
              <a className="btn btn-danger" onClick={this.clearPost}>Delete</a>
            )
          )}
          {currentUser.isAuthenticated && (
            <CommentBox />
          )}
        </div>
      );
    }
    return (
      <div>Something went wrong</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getPost, removePost, deletePost})(ShowPost);