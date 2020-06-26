import React from "react"
// import { Link } from "gatsby"

import SEO from '../components/seo'
import Hero from '../components/Hero/Hero'
import PostFeed from '../components/PostFeed/PostFeed'
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  return (
  <Layout>
      <SEO title={"I know that I don't know what I'm doing.."}/>
      {/* <Hero/> */}
      <PostFeed />
  </Layout>
)}

export default IndexPage


