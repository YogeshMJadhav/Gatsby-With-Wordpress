import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default class Page extends Component {
 render() {
   const currentPost = this.props.data.wordpressPost
   console.log(currentPost);
   return (
       <Layout>
         <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
         <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
       </Layout>
     )
 }
}

export const pageQuery = graphql`
 query($id: String!) {
   wordpressPost(id: { eq: $id }) {
     title
     content
   }
 }
 `