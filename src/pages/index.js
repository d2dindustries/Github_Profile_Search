import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "../components/image"
import SearchBarContainer from "../components/searchbarcontainer"
import SearchResultsContainer from "../components/searchresultscontainer"
import SEO from "../components/seo"
import * as api from "../api/api"

const IndexPage = () => {
	const [results, setResults] = useState([]);
	const [username, setUsername] = useState("");
	const [errorMsg, setError] = useState("");
	useEffect(() => {
		(async function getUserProfile() {
		  if(!username){
		  	setResults([]);
		  	return;
		  }
		  const { error, data } = await api.searchUserProfiles(username);
		  if(error){
		    setError("Error: Something went wrong.");
		  	setResults([]);
		  }else{
		  	const { total_count, items } = data;
		    setError("");
		  	setResults(items);
		  }
		})();
	}, [username]);

	return (
	  <Layout>
	    <SEO title="Home" />
	    <SearchBarContainer title="Github Profile Search" placeholder="Enter a Github Username" onChange={ setUsername }/>
	    <p>{ errorMsg }</p>
	    <SearchResultsContainer results={ results }/>
	  </Layout>
	);
}

export default IndexPage