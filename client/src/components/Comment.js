import React, {PureComponent} from 'react';

class Comment extends PureComponent {
  render() {
    const {text} = this.props;

    return (
      <div>
        <li className="list-group-item">
          <p>{text}</p>
        </li>
      </div>
    );
  }
};

export default Comment;