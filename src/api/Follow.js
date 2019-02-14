import urls, { httpMethods } from "./urls/follow";

import spotifyApiRequest from "../helpers/apiRequest";

export const getFollowingStateForArtistsUsers = optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getFollowingStateForArtistsUsers",
        urls.getFollowingStateForArtistsUsers,
        httpMethods.getFollowingStateForArtistsUsers,
        optional,
        null
      )
    );
  };
};

export const checkIfUsersFollowAPlaylist = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "checkIfUsersFollowAPlaylist",
        urls.checkIfUsersFollowAPlaylist(playlistId),
        httpMethods.checkIfUsersFollowAPlaylist,
        optional,
        null
      )
    );
  };
};

export const followArtistsOrUsers = optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "followArtistsOrUsers",
        urls.followArtistsOrUsers,
        httpMethods.followArtistsOrUsers,
        optional,
        null
      )
    );
  };
};

export const followPlaylist = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "followPlaylist",
        urls.followPlaylist(playlistId),
        httpMethods.followPlaylist,
        optional,
        null
      )
    );
  };
};

export const getUserFollowedArtists = optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getUserFollowedArtists",
        urls.getUserFollowedArtists,
        httpMethods.getUserFollowedArtists,
        optional,
        null
      )
    );
  };
};

export const unfollowArtistsOrUsers = optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "unfollowArtistsOrUsers",
        urls.unfollowArtistsOrUsers,
        httpMethods.unfollowArtistsOrUsers,
        optional,
        null
      )
    );
  };
};

export const unfollowPlaylist = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "unfollowPlaylist",
        urls.unfollowPlaylist(playlistId),
        httpMethods.unfollowPlaylist,
        optional,
        null
      )
    );
  };
};
