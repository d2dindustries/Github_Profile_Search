import axios from 'axios';
import { resolve } from "../utilities/promises";

export async function getUserProfile(username) {
  return await resolve(axios.get(`https://api.github.com/users/${username}`).then(res => res.data));
}

export async function searchUserProfiles(username){
  return await resolve(axios.get(`https://api.github.com/search/users?q=${username}`).then(res => res.data));
}