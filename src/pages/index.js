import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import Image from "../components/image"
import SearchBarContainer from "../components/searchbarcontainer"
import SearchResultsContainer from "../components/searchresultscontainer"
import SEO from "../components/seo"
import { searchUserProfiles } from "../api/api"
import { usePrevious } from "../utilities/stateutility"

const IndexPage = () => {
	const [results, setResults] = useState([]);
	const [username, setUsername] = useState("");
	const [errorMsg, setError] = useState("");
	const [totalUserCount, setTotalUserCount] = useState(0);
	const [page, setPage] = useState(1);

	function _resetState(){
		console.log("State Reset");
	  	setResults([]);
	  	setTotalUserCount(0);
	  	setPage(1);
	}

	async function _searchUserProfiles(curResults) {
	  const { error, data } = await searchUserProfiles(username, page);
	  
	  if(error){
	    setError("Error: Something went wrong.");
	  	_resetState();
	  }else{
	  	const { total_count, items } = data;
	  	const newResults = curResults.concat(items);

	    setError("");
	  	setResults(newResults);
	  	setTotalUserCount(total_count);
	  }
	}

	const prevUsername = usePrevious(username);

	useEffect(() => {
		const isUsernameChanged = prevUsername !== username;
		if(isUsernameChanged || !username) _resetState();

		const curResults = isUsernameChanged ? [] : results;
		if(username) _searchUserProfiles(curResults);
	}, [username, page]);

	const SHOW_RESULTS = results.length > 0;
	const PAGE_CLASS = SHOW_RESULTS ? "page-container" : "page-container page-container-pad";

	return (
	  <Layout>
	    <SEO title="Home" />
	    <div className={ PAGE_CLASS }>
		    <SearchBarContainer title="Github Profile Search" placeholder="Enter a Github Username" onChange={ setUsername }/>
		    { errorMsg ? <p>{ errorMsg }</p> : null }
		    { SHOW_RESULTS ? <SearchResultsContainer results={ results } loadMore={ () => setPage(page+1) }/> : null }
		    { SHOW_RESULTS ? <p style={{ fontSize: 14, textAlign: 'center', paddingTop: 10 }}>Showing { results.length }/{ totalUserCount } Results</p> : null }
		</div>
	  </Layout>
	);
}

export default IndexPage