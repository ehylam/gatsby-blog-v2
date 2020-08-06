import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import './PostFeed.scss';

import Post from '../Post/Post'

const postEl = document.querySelectorAll('.post__block p');

const PostFeed = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              date(fromNow: false, formatString: "dddd DD MMMM YYYY", locale: "")
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
  return (
    <section className="post_feed">
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <Post  key={node.id} title={node.frontmatter.title} date={node.frontmatter.date} description={node.frontmatter.description} image={node.frontmatter.image} html={node.html} link={node.fields.slug}/>
        ))
      }
      {/* <h1>{data.allMarkdownRemark.frontmatter.title}</h1> */}
    </section>
   );
}

export default PostFeed;

