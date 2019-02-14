import fetch from "isomorphic-fetch";

import { host } from "../config";
import { hasOptionalParams } from "../helpers/conditionals";
import createQueryString from "../helpers/query";
import createFetchOptions from "../helpers/fetchOptions";

// Add Tracks to a Playlist
export const addTracksToPlaylist = async (playlistId, optional) => {
  const { uris } = optional;
  let url = `${host}/playlists/${playlistId}/tracks`;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("addTracksToPlaylist", err);
  }
};

// Get All Categories

export const getAllCategories = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getAllCategories", err);
  }
};

// Get a Playlist

export const getPlaylist = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getPlaylist", err);
  }
};

// Remove Tracks from a Playlist

export const removeTracksFromPlaylist = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("removeTracksFromPlaylist", err);
  }
};

// Get a Playlist's Tracks

export const getPlaylistTracks = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getPlaylistTracks", err);
  }
};

// Get a Playlist Cover Image

export const getPlaylistCoverImage = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getPlaylistCoverImage", err);
  }
};

// Upload a Custom Playlist Cover Image

export const uploadCustomPlaylistCoverImage = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("uploadCustomPlaylistCoverImage", err);
  }
};

// Change a Playlist's Details

export const changePlaylistDetails = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("changePlaylistDetails", err);
  }
};

// Get a List of current User's Playlists

export const getListOfCurrentUserPlaylists = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getListOfCurrentUserPlaylists", err);
  }
};

// Replace a Playlist's Tracks

export const replacePlaylistTracks = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("replacePlaylistTracks", err);
  }
};

// Create a Playlist

export const createPlaylist = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("createPlaylist", err);
  }
};

// Reorder a Playlist's Tracks

export const reorderPlaylistTracks = async optional => {
  const { uris } = optional;
  let url = ``;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("reorderPlaylistTracks", err);
  }
};
