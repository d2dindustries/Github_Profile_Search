import axios from 'axios';
import { resolve } from "../utilities/promises";

export async function getUserProfile(username) {
  return await resolve(axios.get(`https://api.github.com/users/${username}`).then(res => res.data));
}

export async function searchUserProfiles(username, page){
  return await resolve(axios.get(`https://api.github.com/search/users?q=${username}&page=${page}`).then(res => res.data));
}

export async function getUserFollowers(username){
  return await resolve(axios.get(`https://api.github.com/users/${username}/followers`).then(res => res.data));
}