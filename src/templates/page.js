import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default class Page extends Component {
 render() {
   const currentPage = this.props.data.wordpressPage
   console.log(currentPage);
   
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
   wordpressPage(id: { eq: $id }) {
     title
     content
   }

 }
 `