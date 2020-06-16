import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import './PostFeed.scss';

import Post from '../Post/Post'

const PostFeed = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              description
              title
            }
            id
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <section className="post_feed">
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <Post  key={node.id} title={node.frontmatter.title} description={node.frontmatter.description} html={node.html} link={node.fields.slug}/>
        ))
      }
      {/* <h1>{data.allMarkdownRemark.frontmatter.title}</h1> */}
    </section>
   );
}

export default PostFeed;

