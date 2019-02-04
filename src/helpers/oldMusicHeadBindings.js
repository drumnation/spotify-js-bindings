const token = "";

const host = "https://api.spotify.com/v1/";

const getHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  method: "GET"
};

const postHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("jwt")
  },
  method: "POST"
};

const putHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  method: "PUT"
};

const deleteHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  method: "DELETE"
};

// SEARCH

// export const searchForArtist = (query) => {
//     const spotifyApi = new Spotify()
//     spotifyApi.setAccessToken(token)
//     return spotifyApi.searchArtists(query)
// }

export const searchForTrack = async query => {
  const url = `${host}/search?q=track:${query}&type=track&limit=1`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

export const searchForAlbum = async query => {
  const url = `${host}/search?q=album:${query}&type=album&limit=1`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

// ARTIST

// export const getArtistTopTracks = (artist) => {
//     const spotify = new Spotify()
//     spotify.setAccessToken(token)
//     return spotify.getArtistTopTracks(artist.id, "US")
// }

// export const getArtistAlbums = (artist) => {
//     const spotify = new Spotify()
//     spotify.setAccessToken(token)
//     return spotify.getArtistAlbums(artist.id, {limit: 20})
// }

export const getRelatedArtists = async seedArtist => {
  const url = `${host}/artists/${seedArtist}/related-artists`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

// ALBUMS

// export const getAlbumTracks = (albumId) => {
//     const spotify = new Spotify()
//     spotify.setAccessToken(token)
//     return spotify.getAlbumTracks(albumId)
// }

// export const getNewAlbumReleases = () => {
//     const spotify = new Spotify()
//     spotify.setAccessToken(token)
//     return spotify.getNewReleases()
// }

// TRACKS

export const getRelatedTracksBasedOnTrack = async track_id => {
  const url = `${host}/recommendations?seed_tracks=${track_id}`;
  const response = fetch(url, getHeaders);
  const json = response.json();
  return json;
};

// ME

export const refreshSpotifyAuthToken = async () => {
  const url = `http://localhost:3000/auth/spotify/refresh/?id=${localStorage.getItem(
    "user_id"
  )}`;
  const response = await fetch(url, postHeaders);
  const json = response.json();
  return json;
};

export const getUserRecentlyPlayedTracks = async () => {
  const url = `${host}/me/player/recently-played`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};
// Valid values
// long_term (calculated from several years of data and including all new data as it becomes available),
// medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term.

export const getUserSavedTracks = async () => {
  const url = `${host}/me/tracks`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

export const getUserFollowedArtists = async () => {
  const url = `${host}/me/following?type=artist`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

// ME -> PLAYBACK

export const getUserTopArtistsOrTracks = async type => {
  // artists or tracks
  const url = `${host}/me/top/${type}`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

export const getUserCurrentlyPlayingTrack = async () => {
  const url = `${host}/me/player/currently-playing`;
  const response = await fetch(url, getHeaders);
  const json = response.json();
  return json;
};

export const putStartStopUserPlayback = async context_uri => {
  const putWithContext = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    method: "PUT",
    body: `${{ context_uri }}`
  };
  const url = `{host}/me/player/play`;
  const response = await fetch(url, putWithContext);
  const json = response.json();
  return json;
};

export const putSeekToPositionInCurrentlyPlayingTrack = async position_ms => {
  const url = `${host}/me/player/seek?position_ms=${position_ms}`;
  const response = await fetch(url, putHeaders);
  const json = response.json();
  return json;
};

// PLAYLISTS

export const postAddTracksToPlaylist = async (
  user_id,
  playlist_id,
  uris_to_add
) => {
  const url = `${host}/users/${user_id}/playlists/${playlist_id}/tracks`;
  const response = await fetch(url, postHeaders);
  const json = response.json();
  return json;
  // request body or query string: uris, position *optional
};

export const putReorderPlaylistTracks = async (
  user_id,
  playlist_id,
  uris_to_add
) => {
  const url = `${host}/users/${user_id}/playlists/${playlist_id}/tracks`;
  const response = await fetch(url, postHeaders);
  const json = response.json();
  return json;
  // request body or query string: uris, position *optional
};

export const deletePlaylistTracks = async (
  user_id,
  playlist_id,
  uris_to_add
) => {
  const url = `${host}/users/${user_id}/playlists/${playlist_id}/tracks`;
  const response = await fetch(url, deleteHeaders);
  const json = response.json();
  return json;
  // request body or query string: uris, position *optional
};
