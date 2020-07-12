import React from 'react';

import './Post.scss'

const Post = (props) => {
  const {date, link, title, description, image} = props;
  return (
    <article className="post wrap">
      <div className="post__block">
        <p>{date}</p>
      </div>

      <a className="post__link" href={link}>
        <div className="heading">
          <h1>{title}</h1>
          <h1>{title}</h1>
        </div>
        <div className="description">
          <h3>{description}</h3>
          <h3>{description}</h3>
        </div>
      </a>
    </article>
   );
}

export default Post;