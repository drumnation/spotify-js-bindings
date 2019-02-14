import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/follow";

export const getFollowingStateForArtistsUsers = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
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
      spotifyFetch(
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
      spotifyFetch(
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
      spotifyFetch(
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
      spotifyFetch(
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
      spotifyFetch(
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
      spotifyFetch(
        "unfollowPlaylist",
        urls.unfollowPlaylist(playlistId),
        httpMethods.unfollowPlaylist,
        optional,
        null
      )
    );
  };
};
