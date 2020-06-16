import React from "react"
// import { Link } from "gatsby"

import PostFeed from '../components/PostFeed/PostFeed'
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  return (
  <Layout>
       <PostFeed />
  </Layout>
)}

export default IndexPage


