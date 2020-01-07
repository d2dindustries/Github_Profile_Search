import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "../components/image"
import SearchBarContainer from "../components/searchbarcontainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchBarContainer />
  </Layout>
)

export default IndexPage


    // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //   <Image />
    // </div>