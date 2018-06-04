import React from 'react';
import { Link } from "react-router-dom"

const PostList = ({posts}) => {
  return (
      <ul className="list-group">
        {posts.map(post =>
          <li className="list-group-item" key={post.id}>
            <Link to={`/${post.category}/${post.id}`}>{ post.title }</Link><br/>
          </li>
        )}
      </ul>
  );
};

export default PostList;