import spotifyFetch from "../helpers/fetch";
import { urls, httpMethods } from "../config/library";
import bindActionCreators from "../helpers/actions";

const checkUserSavedAlbums = (albumIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: albumIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "checkUserSavedAlbums",
        urls.checkUserSavedAlbums,
        httpMethods.checkUserSavedAlbums,
        mergedOptional,
        null
      )
    );
  };
};

const saveTracksForUser = (trackIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: trackIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "saveTracksForUser",
        urls.saveTracksForUser,
        httpMethods.saveTracksForUser,
        mergedOptional,
        null
      )
    );
  };
};

const removeAlbumsForCurrentUser = (albumIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: albumIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "removeAlbumsForCurrentUser",
        urls.removeAlbumsForCurrentUser,
        httpMethods.removeAlbumsForCurrentUser,
        mergedOptional,
        null
      )
    );
  };
};

const saveAlbumsForCurrentUser = (albumIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: albumIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "saveAlbumsForCurrentUser",
        urls.saveAlbumsForCurrentUser,
        httpMethods.saveAlbumsForCurrentUser,
        mergedOptional,
        null
      )
    );
  };
};

const removeUserSavedTracks = (trackIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: trackIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "removeUserSavedTracks",
        urls.removeUserSavedTracks,
        httpMethods.removeUserSavedTracks,
        mergedOptional,
        null
      )
    );
  };
};

const getUserSavedAlbums = (albumIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: albumIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getUserSavedAlbums",
        urls.getUserSavedAlbums,
        httpMethods.getUserSavedAlbums,
        mergedOptional,
        null
      )
    );
  };
};

const getUserSavedTracks = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getUserSavedTracks",
        urls.getUserSavedTracks,
        httpMethods.getUserSavedTracks,
        optional,
        null
      )
    );
  };
};

const checkUserSavedTracks = (trackIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: trackIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "checkUserSavedTracks",
        urls.checkUserSavedTracks,
        httpMethods.checkUserSavedTracks,
        mergedOptional,
        null
      )
    );
  };
};

const library = bindActionCreators({
  checkUserSavedAlbums,
  saveTracksForUser,
  removeAlbumsForCurrentUser,
  saveAlbumsForCurrentUser,
  removeUserSavedTracks,
  getUserSavedAlbums,
  getUserSavedTracks,
  checkUserSavedTracks
});

export default library;
