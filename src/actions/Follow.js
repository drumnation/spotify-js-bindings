import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/follow";
import bindActionCreators from "../helpers/actions";

const getFollowingStateForArtistsUsers = (type, ids, optional) => {
  return async dispatch => {
    const mergedOptional = {
      type,
      ids,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getFollowingStateForArtistsUsers",
        urls.getFollowingStateForArtistsUsers,
        httpMethods.getFollowingStateForArtistsUsers,
        mergedOptional,
        null
      )
    );
  };
};

const checkIfUsersFollowPlaylist = (playlistId, ids, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "checkIfUsersFollowAPlaylist",
        urls.checkIfUsersFollowPlaylist(playlistId),
        httpMethods.checkIfUsersFollowAPlaylist,
        mergedOptional,
        null
      )
    );
  };
};

const followArtistsOrUsers = (type, ids, optional) => {
  return async dispatch => {
    const mergedOptional = {
      type,
      ids,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "followArtistsOrUsers",
        urls.followArtistsOrUsers,
        httpMethods.followArtistsOrUsers,
        mergedOptional,
        null
      )
    );
  };
};

const followPlaylist = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "followPlaylist",
        urls.followPlaylist(playlistId),
        httpMethods.followPlaylist,
        optional,
        body
      )
    );
  };
};

const getUserFollowedArtists = (type, optional) => {
  return async dispatch => {
    const mergedOptional = {
      type,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getUserFollowedArtists",
        urls.getUserFollowedArtists,
        httpMethods.getUserFollowedArtists,
        mergedOptional,
        null
      )
    );
  };
};

const unfollowArtistsOrUsers = (type, ids, optional) => {
  return async dispatch => {
    const mergedOptional = {
      type,
      ids,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "unfollowArtistsOrUsers",
        urls.unfollowArtistsOrUsers,
        httpMethods.unfollowArtistsOrUsers,
        mergedOptional,
        null
      )
    );
  };
};

const unfollowPlaylist = (playlistId, optional) => {
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

const follow = bindActionCreators({
  getFollowingStateForArtistsUsers,
  checkIfUsersFollowPlaylist,
  followArtistsOrUsers,
  followPlaylist,
  getUserFollowedArtists,
  unfollowArtistsOrUsers,
  unfollowPlaylist
});

export default follow;
