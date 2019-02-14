import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/albums";

export const getMultipleAlbums = (albumIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: albumIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getMultipleAlbums",
        urls.getMultipleAlbums,
        httpMethods.getMultipleAlbums,
        mergedOptional,
        null
      )
    );
  };
};

export const getAlbum = (albumId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAlbum",
        urls.getAlbum(albumId),
        httpMethods.getAlbum,
        optional,
        null
      )
    );
  };
};

export const getAnAlbumTracks = (albumId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAnAlbumTracks",
        urls.getAnAlbumTracks(albumId),
        httpMethods.getAnAlbumTracks,
        optional,
        null
      )
    );
  };
};
