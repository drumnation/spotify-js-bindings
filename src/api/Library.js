import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/library";

export const checkUserSavedAlbums = (albumIds, optional) => {
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

export const saveTracksForUser = (trackIds, optional) => {
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

export const removeAlbumsForCurrentUser = (albumIds, optional) => {
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

export const saveAlbumsForCurrentUser = (albumIds, optional) => {
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

export const removeUserSavedTracks = (trackIds, optional) => {
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

export const getUserSavedAlbums = (albumIds, optional) => {
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

export const getUserSavedTracks = optional => {
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

export const checkUserSavedTracks = (trackIds, optional) => {
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
