import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Post from "../Post/Post"

const PostFeed = () => {
  useEffect(() => {
    const postEl = document.querySelectorAll(".post__block p")
    postEl.forEach(el => {
      // for each hovered element set the calc the space used
      // by the date element and minus the wrapper width and set that value to the
      // ::after tag's width.
    })
  }, [])

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              date(
                fromNow: false
                formatString: "dddd DD MMMM YYYY"
                locale: ""
              )
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
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            image={node.frontmatter.image}
            html={node.html}
            link={node.fields.slug}
          />
        )
      })}
      {/* <h1>{data.allMarkdownRemark.frontmatter.title}</h1> */}
    </section>
  )
}

export default PostFeed
