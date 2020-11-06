import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I'm trying to gain employment</p>
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default AboutPage
