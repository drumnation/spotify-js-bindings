import spotifyApiRequest from "../helpers/apiRequest";
import urls, { httpMethods } from "./urls/playlists";

export const addTracksToPlaylist = async (playlistId, uris, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
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
      spotifyApiRequest(
        "reorderPlaylistTracks",
        urls.reorderPlaylistTracks(playlistId),
        httpMethods.reorderPlaylistTracks,
        optional,
        body
      )
    );
  };
};
