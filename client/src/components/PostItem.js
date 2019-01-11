import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = ({title, body, id}) => {
  return (
    <div>
      <Link to={"/post/" + id}>
        <li className="list-group-item">
          <h3>{title}</h3>
          <p>{body}</p>
        </li>
      </Link>
    </div>
  );
};

export default PostItem;