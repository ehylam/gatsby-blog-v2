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
      <div className="single-image">
        <img src={frontmatter.image.childImageSharp.fluid.src} alt=""/>
      </div>
      <div className="single-content">
        <div className="single-content__left">
          <div className="date">{frontmatter.date}</div>
        </div>
        <div className="single-content__right">
          <h1>{frontmatter.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{__html: markdownRemark.html }}/>
        </div>
        </div>
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
        date(fromNow: false, formatString: "dddd DD MMMM YYYY", locale: "")
        image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
      }
      id
      html
    }
  }
`