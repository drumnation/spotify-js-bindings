import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/playlists";
import bindActionCreators from "../helpers/actions";

const addTracksToPlaylist = (playlistId, uris, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "addTracksToPlaylist",
        urls.addTracksToPlaylist(playlistId),
        httpMethods.addTracksToPlaylist,
        optional,
        uris
      )
    );
  };
};

const getPlaylist = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getPlaylist",
        urls.getPlaylist(playlistId),
        httpMethods.getPlaylist,
        optional,
        null
      )
    );
  };
};

const removeTracksFromPlaylist = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAllCategories",
        urls.removeTracksFromPlaylist(playlistId),
        httpMethods.removeTracksFromPlaylist,
        optional,
        body
      )
    );
  };
};

const getPlaylistTracks = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAllCategories",
        urls.getPlaylistTracks(playlistId),
        httpMethods.getPlaylistTracks,
        optional,
        null
      )
    );
  };
};

const getPlaylistCoverImage = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getPlaylistCoverImage",
        urls.getPlaylistCoverImage(playlistId),
        httpMethods.getPlaylistCoverImage,
        optional,
        null
      )
    );
  };
};

const uploadCustomPlaylistCoverImage = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "uploadCustomPlaylistCoverImage",
        urls.uploadCustomPlaylistCoverImage(playlistId),
        httpMethods.uploadCustomPlaylistCoverImage,
        optional,
        null
      )
    );
  };
};

const getListOfCurrentUserPlaylists = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getListOfCurrentUserPlaylists",
        urls.getListOfCurrentUserPlaylists,
        httpMethods.getListOfCurrentUserPlaylists,
        optional,
        null
      )
    );
  };
};

const changePlaylistDetails = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "changePlaylistDetails",
        urls.changePlaylistDetails(playlistId),
        httpMethods.changePlaylistDetails,
        optional,
        body
      )
    );
  };
};

const getListOfUserPlaylists = (playlistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getListOfUserPlaylists",
        urls.getListOfUserPlaylists(playlistId),
        httpMethods.getListOfUserPlaylists,
        optional,
        null
      )
    );
  };
};

const reorderOrReplacePlaylistTracks = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "reorderOrReplacePlaylistTracks",
        urls.reorderOrReplacePlaylistTracks(playlistId),
        httpMethods.reorderOrReplacePlaylistTracks,
        optional,
        body
      )
    );
  };
};

const createPlaylist = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "createPlaylist",
        urls.createPlaylist(playlistId),
        httpMethods.createPlaylist,
        optional,
        body
      )
    );
  };
};

const reorderPlaylistTracks = (playlistId, body, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "reorderPlaylistTracks",
        urls.reorderPlaylistTracks(playlistId),
        httpMethods.reorderPlaylistTracks,
        optional,
        body
      )
    );
  };
};

const playlists = bindActionCreators({
  addTracksToPlaylist,
  getPlaylist,
  removeTracksFromPlaylist,
  getPlaylistTracks,
  getPlaylistCoverImage,
  uploadCustomPlaylistCoverImage,
  getListOfCurrentUserPlaylists,
  changePlaylistDetails,
  getListOfUserPlaylists,
  reorderOrReplacePlaylistTracks,
  createPlaylist,
  reorderPlaylistTracks
});

export default playlists;
