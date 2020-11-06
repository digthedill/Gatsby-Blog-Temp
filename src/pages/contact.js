import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is{" "}
        <a href="mailto: digthedill@gmail.com">email</a>
      </p>
      <p>
        Check out my{" "}
        <a href="https://github.com/digthedill/" target="blank">
          Github
        </a>
      </p>
    </Layout>
  )
}
export default ContactPage
