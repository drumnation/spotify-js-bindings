import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/follow";
import bindActionCreators from "../helpers/actions";

const getFollowingStateForArtistsUsers = optional => {
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

const checkIfUsersFollowAPlaylist = (playlistId, optional) => {
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

const followArtistsOrUsers = optional => {
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

const followPlaylist = (playlistId, optional) => {
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

const getUserFollowedArtists = optional => {
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

const unfollowArtistsOrUsers = optional => {
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
  checkIfUsersFollowAPlaylist,
  followArtistsOrUsers,
  followPlaylist,
  getUserFollowedArtists,
  unfollowArtistsOrUsers,
  unfollowPlaylist
});

export default follow;
