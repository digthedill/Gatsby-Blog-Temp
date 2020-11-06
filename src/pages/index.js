import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Dillon, a full-stack developer living in Chicago</h2>

      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default IndexPage
