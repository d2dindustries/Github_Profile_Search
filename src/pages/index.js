import React, { useEffect, useReducer } from 'react'

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import SearchBarContainer from "../components/searchbarcontainer"
import ResultsContainer from "../components/resultscontainer"
import SearchCounter from "../components/searchcounter"
import ProfileContainer from "../components/profilecontainer";
import SEO from "../components/seo"
import { _searchUserProfiles, _getUserFollowers } from "../api/middleware"
import { usePrevious, mergeObjects } from "../utilities/stateutility"
import { APP_SEARCH_TITLE, APP_SEARCH_SUB } from "../utilities/constants.js";

const IndexPage = () => {
	const DEFAULT_APP_STATE = {
		username: "",
		page: 1,
		totalUserCount: 0,
		results: [],
		error: {
			search: "",
			profile: "",
			followers: ""
		},
		profile: {
			avatar: "",
			username: "",
			followers: [],
			html_url: ""
		}
	}

	const [state, setState] = useReducer((state, newState) => ( mergeObjects(state, newState) ), DEFAULT_APP_STATE);

	function _resetState(){
		setState(mergeObjects(DEFAULT_APP_STATE, { username: state.username }));
	}

	const prevUsername = usePrevious(state.username);

	useEffect(() => {

		if(state.profile.username) _getUserFollowers(state,
			(success) => { setState(success); },
			(error) => { _resetState(); setState(error); });

	}, [state.profile.username]);


	useEffect(() => {
	    const { username, results } = state;
		const isUsernameChanged = prevUsername !== username;
		if(isUsernameChanged || !username) _resetState();

		const curResults = isUsernameChanged ? [] : results;

		if(username) _searchUserProfiles(state, curResults,
			(success) => { setState(success); },
			(error) => { _resetState(); setState(error); });

	}, [state.username, state.page]);

	const { page, profile, results, totalUserCount, error } = state;
	const { followers } = profile;
	const FOLLOWER_COUNT = followers ? followers.length : 0;
	const SHOW_PROFILE = profile.username.length > 0;
	const SHOW_FOLLOWERS = SHOW_PROFILE && FOLLOWER_COUNT > 0;
	const SHOW_RESULTS = results.length > 0 && !SHOW_PROFILE;
	const PAGE_CLASS = SHOW_RESULTS || SHOW_PROFILE ? "page-container" : "page-container page-container-pad";

	return (
	  <Layout>
	    <SEO title="Home" />
	    <div className={ PAGE_CLASS }>
		    <SearchBarContainer title={ APP_SEARCH_TITLE } placeholder={ APP_SEARCH_SUB } error={ error.search } onChange={ setState }/>
		    <ResultsContainer visible={!SHOW_PROFILE} results={ results } totalUserCount={ totalUserCount } loadMore={ () => setState({ page: page+1 }) } openProfile={ (changedData) => setState({ profile: mergeObjects(profile, changedData) }) }/>
		    <SearchCounter visible={!SHOW_PROFILE} count={results.length} total={totalUserCount} />
		    <ProfileContainer visible={SHOW_PROFILE} profile={ profile } error={ error.profile }/>
		    { SHOW_FOLLOWERS ? <h6><b>Followers: { FOLLOWER_COUNT }</b></h6> : null }
		    <ResultsContainer visible={SHOW_FOLLOWERS} results={ followers } totalUserCount={ FOLLOWER_COUNT } />
		</div>
	  </Layout>
	);
}



export default IndexPage