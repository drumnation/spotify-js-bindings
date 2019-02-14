import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/playlists";

export const addTracksToPlaylist = async (playlistId, uris, optional) => {
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

export const getPlaylist = async (playlistId, optional) => {
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

export const removeTracksFromPlaylist = async (playlistId, body, optional) => {
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

export const getPlaylistTracks = async (playlistId, optional) => {
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

export const getPlaylistCoverImage = async (playlistId, optional) => {
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

export const uploadCustomPlaylistCoverImage = async (playlistId, optional) => {
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

export const getListOfCurrentUserPlaylists = async optional => {
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

export const changePlaylistDetails = async (playlistId, body, optional) => {
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

export const getListOfUserPlaylists = (playlistId, optional) => {
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

export const reorderOrReplacePlaylistTracks = (playlistId, body, optional) => {
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

export const createPlaylist = async (playlistId, body, optional) => {
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

export const reorderPlaylistTracks = async (playlistId, body, optional) => {
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
