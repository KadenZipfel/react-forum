import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Comment from '../components/Comment';

class CommentList extends PureComponent {
  render() {
    const {post} = this.props;

    if(true) {
      let commentList = post.comments.map(c => (
        <Comment text={c.text} key={c._id} />
      ));
      return (
        <div>
          <ul className="list-group">
            {commentList}
          </ul>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  };
};

export default connect(mapStateToProps)(CommentList);