import React from "react"
// import { Link } from "gatsby"

import Hero from '../components/Hero/Hero'
import PostFeed from '../components/PostFeed/PostFeed'
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  return (
  <Layout>
      <Hero/>
      <PostFeed />
  </Layout>
)}

export default IndexPage


