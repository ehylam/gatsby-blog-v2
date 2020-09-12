import React from 'react';

const Post = (props) => {
  const {date, link, title, description, image} = props;
  return (
    <article className="post wrap">
        <div className="post__block">
          <p>{date}</p>
        </div>

        <div className="post__link">
          <div className="heading">
            <h1>{title}</h1>
            <h1>{title}</h1>
          </div>
          <div className="description">
            <h3>{description}</h3>
            <h3>{description}</h3>
          </div>
        </div>
    </article>
   );
}

export default Post;