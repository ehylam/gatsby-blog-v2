import React from 'react';

import './Post.scss'

const Post = (props) => {
  return (
    <article className="post">
      <a className="post__link" href={props.link}>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
      </a>
    </article>
   );
}

export default Post;