import fetch from "isomorphic-fetch";

import Spotify, { host } from "../config";
import { hasOptionalParams } from "../helpers/conditionals";
import createQueryString from "../helpers/query";

// Add Tracks to a Playlist
export const addTracksToPlaylist = async (playlistId, optional) => {
  const { uris } = optional;
  let url = `${host}/playlists/${playlistId}/tracks`;
  if (hasOptionalParams(optional)) {
    url += createQueryString(optional);
  }
  try {
    const options = Spotify.createFetchOptions("Post", uris);
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getAllCategories", err);
  }
};

// Get All Categories

// Get a Playlist

// Remove Tracks from a Playlist

// Get a Playlist's Tracks

// Get a Playlist Cover Image

// Upload a Custom Playlist Cover Image

// Get a List of Current User's Playlists

// Change a Playlist's Details

// Get a List of a User's Playlists

// Replace a Playlist's Tracks

// Create a Playlist

// Reorder a Playlist's Tracks
