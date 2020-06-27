import React from "react"
import SEO from "../components/seo"
import {graphql} from "gatsby"

import './single.scss'
import Layout from "../components/layout"


const SinglePage = ({data}) => {

  const {markdownRemark} = data
  const {frontmatter,html} = markdownRemark

  return (
    <Layout>
    <SEO title="Post Title Here"/>
      <section className="single wrap">
      <h1>{frontmatter.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{__html: markdownRemark.html }}/>
      </section>
    </Layout>
   );
}

export default SinglePage;


export const singleQuery = graphql`
  query singlePageQuery($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
      }
      id
      html
    }
  }
`