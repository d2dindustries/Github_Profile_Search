import { searchUserProfiles, getUserFollowers, getUserProfile } from "./api"
import { mergeObjects } from "../utilities/stateutility"

export async function _searchUserProfiles(state, curResults, success, failure) {
  const { username, page } = state;
  const { error, data } = await searchUserProfiles(username, page);
   console.log('get user prof');

  if(error){
  	failure({ error: { search: "Error: Something went wrong. Please try again soon." } });
  }else{
  	const { total_count, items } = data;
  	const newResults = curResults.concat(items);

  	const errorVal = total_count === 0 ? "The User you are looking for could not be found." : "";
	  success({ canLoad: true, error: { search: errorVal }, results: newResults, totalUserCount: total_count });
  }
}

export async function _getUserFollowers(state, success, failure) {
  const { profile, profilePage } = state;
  const { error, data } = await getUserFollowers(profile.username, profilePage);

  if(error){
  	failure({ error: { followers: "Error: Something went wrong. Please try again soon." } });
  }else{
    const newResults = profile.followers.concat(data);
    success({ followers: newResults });
  }
}

export async function _getUserProfile(state, success, failure) {
  const { profile } = state;
  const { error, data } = await getUserProfile(profile.username);
  const info = (({ name, html_url, avatar_url, company, blog, location, email, bio, followers, following }) =>
    ({ info: { name, html_url, avatar_url, company, blog, location, email, bio, follower_count: followers, following_count: following } }))(data);

  if(error){
    failure({ error: { profile: "Error: Something went wrong. Please try again soon." } });
  }else{
    await _getUserFollowers(state, (followers) => {
      const retObj = mergeObjects(info, followers);
      success(mergeObjects(profile, retObj));
    }, failure);
  }
}