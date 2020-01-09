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
import { searchUserProfiles, getUserFollowers } from "../api/api"
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
	const [errorProfileMsg, setProfileError] = useState("");

	function _setStateValues(errVal, resVal, countVal, pageVal = null, profileVal = null, errProfVal = null){
	    setSearchError(errVal);
	  	setResults(resVal);
	  	setTotalUserCount(countVal);
	  	if(pageVal) setPage(pageVal);
	  	if(profileVal) setProfile(profileVal);
	  	if(errProfVal) setProfileError(errProfVal);
	}

	function _resetState(){
		console.log("State Reset");
		_setStateValues("", [], 0, 1, {}, "");
	}

	async function _getUserFollowers() {
	  const { error, data } = await getUserFollowers(username);
	  
	  if(error){
	  	_resetState();
	    setProfileError("Error: Something went wrong. Please try again soon.");
	  }else{
	  	// const errorVal = data.length === 0 ? "This Profile doesn't seem to have any followers." : "";
	  	// setProfileError(errorVal);
	  	setProfile({ ...profile, followers: data });
	  }
	}

	async function _searchUserProfiles(curResults) {
	  const { error, data } = await searchUserProfiles(username, page);
	  
	  if(error){
	  	_resetState();
	    setSearchError("Error: Something went wrong. Please try again soon.");
	  }else{
	  	const { total_count, items } = data;
	  	const newResults = curResults.concat(items);

	  	const errorVal = total_count === 0 ? "The User you are looking for could not be found." : "";
		_setStateValues(errorVal, newResults, total_count);
	  }
	}

	const prevUsername = usePrevious(username);

	useEffect(() => {	
		if(profile.username) _getUserFollowers();
	}, [profile.username]);


	useEffect(() => {
		const isUsernameChanged = prevUsername !== username;
		if(isUsernameChanged || !username) _resetState();

		const curResults = isUsernameChanged ? [] : results;
		if(username) _searchUserProfiles(curResults);
	}, [username, page]);

	const { followers } = profile;
	const FOLLOWER_COUNT = followers ? followers.length : 0;
	const SHOW_PROFILE = profile.username;
	const SHOW_FOLLOWERS = SHOW_PROFILE && FOLLOWER_COUNT > 0;
	const SHOW_RESULTS = results.length > 0 && !SHOW_PROFILE;
	const PAGE_CLASS = SHOW_RESULTS || SHOW_PROFILE ? "page-container" : "page-container page-container-pad";

	return (
	  <Layout>
	    <SEO title="Home" />
	    <div className={ PAGE_CLASS }>
		    <SearchBarContainer title="Github Profile Search" placeholder="Enter a Github Username" onChange={ setUsername }/>
		    { errorSearchMsg ? <p>{ errorSearchMsg }</p> : null }
		    { SHOW_RESULTS ? <SearchResultsContainer results={ results } totalUserCount={ totalUserCount } loadMore={ () => setPage(page+1) } openProfile={ ({ avatar, username }) => setProfile({ avatar: avatar, username: username }) }/> : null }
		    { SHOW_RESULTS ? <p style={{ fontSize: 14, textAlign: 'center', paddingTop: 10 }}>Showing { results.length }/{ totalUserCount } Results</p> : null }
		    { SHOW_PROFILE ? <ProfileContainer profile={ profile }/> : null }
		    { errorProfileMsg ? <p>{ errorProfileMsg }</p> : null}
		    { SHOW_FOLLOWERS ? <h6><b>Followers: { FOLLOWER_COUNT }</b></h6> : null }
		    { SHOW_FOLLOWERS ? <SearchResultsContainer results={ followers } totalUserCount={ FOLLOWER_COUNT } /> : null }
		</div>
	  </Layout>
	);
}

export default IndexPage