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
      <img src="https://placedog.net/500/500" alt="" />
    </Layout>
  )
}

export default IndexPage
