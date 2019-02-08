import fetch from "isomorphic-fetch";

import Spotify, { host } from "../config";
import { hasOptionalParams } from "../helpers/conditionals";
import createQueryString from "../helpers/query";

// Get Following State for Artists/Users: /v1/me/following/contains

// Check if Users Follow a Playlist: /v1/playlists/{playlist_id}/followers/contains

// Follow Artists or Users: /v1/me/following

// Follow a Playlist

export const followPlaylist = async (playlistId, optional) => {
  const { uris } = optional;
  let url = `${host}/playlists/${playlistId}/followers`;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = Spotify.createFetchOptions("Put", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("Follow Playlist", err);
  }
};
// Get User's Followed Artists: /v1/me/following

export const getUsersFollowedArtists = async optional => {
  const { uris } = optional;
  let url = `${host}/me/following`;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = Spotify.createFetchOptions("Get", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("Follow Playlist", err);
  }
};

// Unfollow Artists or Users: /v1/me/following

// Unfollow Playlist: /v1/playlists/{playlist_id}/followers

export const unfollowPlaylist = async (playlistId, optional) => {
  const { uris } = optional;
  let url = `${host}/playlists/${playlistId}/followers`;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = Spotify.createFetchOptions("Delete", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("Follow Playlist", err);
  }
};
