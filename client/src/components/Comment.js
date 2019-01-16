import React from 'react';

const Comment = ({text}) => {
  return (
    <div>
      <li className="list-group-item">
        <p>{text}</p>
      </li>
    </div>
  );
};

export default Comment;