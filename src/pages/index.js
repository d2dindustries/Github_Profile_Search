import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import Image from "../components/image"
import SearchBarContainer from "../components/searchbarcontainer"
import SearchResultsContainer from "../components/searchresultscontainer"
import ProfileContainer from "../components/profilecontainer";
import SEO from "../components/seo"
import { searchUserProfiles } from "../api/api"
import { usePrevious } from "../utilities/stateutility"

const IndexPage = () => {
	//Search State
	const [results, setResults] = useState([]);
	const [username, setUsername] = useState("");
	const [errorSearchMsg, setSearchError] = useState("");
	const [totalUserCount, setTotalUserCount] = useState(0);
	const [page, setPage] = useState(1);

	//Profile State
	const [profile, setProfile] = useState({});
	// const [errorProfileMsg, setProfileError] = useState("");

	function _setStateValues(errVal, resVal, countVal, pageVal = null, profileVal = null){
	    setSearchError(errVal);
	  	setResults(resVal);
	  	setTotalUserCount(countVal);
	  	if(pageVal) setPage(pageVal);
	  	if(profileVal) setProfile(profileVal);
	}

	function _resetState(){
		console.log("State Reset");
		_setStateValues("", [], 0, 1, {});
	}

	// async function _getUserFollowers(curResults) {
	//   const { error, data } = await getUserFollowers(username);
	  
	//   if(error){
	//   	_resetState();
	//     setProfileError("Error: Something went wrong.");
	//   }else{
	//   	const errorVal = data.length === 0 ? "The Profile you are looking for could not be found." : "";	  	
	//   	setProfileError(errorVal);
	//   	setProfile(data);
	//   }
	// }

	async function _searchUserProfiles(curResults) {
	  const { error, data } = await searchUserProfiles(username, page);
	  
	  if(error){
	  	_resetState();
	    setSearchError("Error: Something went wrong.");
	  }else{
	  	const { total_count, items } = data;
	  	const newResults = curResults.concat(items);

	  	const errorVal = total_count === 0 ? "The User you are looking for could not be found." : "";
		_setStateValues(errorVal, newResults, total_count);
	  }
	}

	const prevUsername = usePrevious(username);

	useEffect(() => {
		const isUsernameChanged = prevUsername !== username;
		if(isUsernameChanged || !username) _resetState();

		const curResults = isUsernameChanged ? [] : results;
		if(username) _searchUserProfiles(curResults);
	}, [username, page]);

	const SHOW_PROFILE = profile.username;
	const SHOW_RESULTS = results.length > 0 && !SHOW_PROFILE;
	const PAGE_CLASS = SHOW_RESULTS ? "page-container" : "page-container page-container-pad";

	return (
	  <Layout>
	    <SEO title="Home" />
	    <div className={ PAGE_CLASS }>
		    <SearchBarContainer title="Github Profile Search" placeholder="Enter a Github Username" onChange={ setUsername }/>
		    { errorSearchMsg ? <p>{ errorSearchMsg }</p> : null }
		    { SHOW_RESULTS ? <SearchResultsContainer results={ results } totalUserCount={ totalUserCount } loadMore={ () => setPage(page+1) } openProfile={ ({ avatar, username }) => setProfile({ avatar: avatar, username: username }) }/> : null }
		    { SHOW_RESULTS ? <p style={{ fontSize: 14, textAlign: 'center', paddingTop: 10 }}>Showing { results.length }/{ totalUserCount } Results</p> : null }
		    { SHOW_PROFILE ? <ProfileContainer profile={ profile }/> : null }
		</div>
	  </Layout>
	);
}

export default IndexPage