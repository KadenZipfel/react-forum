import React from 'react';

const PostItem = ({title, body}) => {
  return (
    <div>
      <li className="list-group-item">
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    </div>
  );
};

export default PostItem;