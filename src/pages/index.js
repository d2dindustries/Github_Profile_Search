import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "../components/image"
import SearchBarContainer from "../components/searchbarcontainer"
import SearchResultsContainer from "../components/searchresultscontainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchBarContainer />
    <SearchResultsContainer results={["1","2","3","4","5","6"]}/>
  </Layout>
)

export default IndexPage


    // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //   <Image />
    // </div>