import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost} from '../store/actions/posts';

class ShowPost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const {post} = this.props;

    if(post) {
      return (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.comments}</p>
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
    post: state.post
  }
}

export default connect(mapStateToProps, {getPost})(ShowPost);