import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Articles:</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
export default BlogPage
