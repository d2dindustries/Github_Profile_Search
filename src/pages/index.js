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
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		function resetState(){
		  	setResults([]);
		  	setTotalCount(0);			
		}

		(async function getUserProfile() {
		  if(!username){
		  	resetState();
		  	return;
		  }
		  const { error, data } = await api.searchUserProfiles(username);
		  if(error){
		    setError("Error: Something went wrong.");
		  	resetState();
		  }else{
		  	const { total_count, items } = data;
		    setError("");
		  	setResults(items);
		  	setTotalCount(total_count);
		  }
		})();
	}, [username]);

	const SHOW_RESULTS = results.length > 0;

	return (
	  <Layout>
	    <SEO title="Home" />
	    <SearchBarContainer title="Github Profile Search" placeholder="Enter a Github Username" onChange={ setUsername }/>
	    <p>{ errorMsg }</p>
	    { SHOW_RESULTS ? <SearchResultsContainer results={ results }/> : null }
	    { SHOW_RESULTS ? <p style={{ fontSize: 14, textAlign: 'center', paddingTop: 10 }}>Showing { results.length }/{ totalCount } Results</p> : null }
	  </Layout>
	);
}

export default IndexPage