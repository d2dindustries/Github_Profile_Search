import { searchUserProfiles, getUserFollowers } from "./api"
import { mergeObjects } from "../utilities/stateutility"

export async function _searchUserProfiles(state, curResults, success, failure) {
  const { username, page } = state;
  const { error, data } = await searchUserProfiles(username, page);
  
  if(error){
  	failure({ error: { search: "Error: Something went wrong. Please try again soon." } });
  }else{
  	const { total_count, items } = data;
  	const newResults = curResults.concat(items);

  	const errorVal = total_count === 0 ? "The User you are looking for could not be found." : "";
	  success({ error: { search: errorVal }, results: newResults, totalUserCount: total_count });
  }
}

export async function _getUserFollowers(state, success, failure) {
  const { profile } = state;
  const { error, data } = await getUserFollowers(profile.username);

  if(error){
  	failure({ error: { followers: "Error: Something went wrong. Please try again soon." } });
  }else{
    success({ profile: mergeObjects(profile, { followers: data }) });
  }
}