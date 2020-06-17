import React from 'react';

import './Post.scss'

const Post = (props) => {
  return (
    <article className="post wrap">
      <div className="post__block">
        <p>{props.date}</p>
      </div>

      <a className="post__link" href={props.link}>
        <div className="heading">
          <h1>{props.title}</h1>
          <h1>{props.title}</h1>
        </div>
        <div className="description">
          <h3>{props.description}</h3>
          <h3>{props.description}</h3>
        </div>
      </a>
    </article>
   );
}

export default Post;