import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/browse";

export const getMultipleArtists = (artistIds, optional) => {
  return async dispatch => {
    const mergedOptions = {
      ...optional,
      ...artistIds
    };
    return dispatch(
      spotifyFetch(
        "getMultipleArtists",
        urls.getMultipleArtists,
        httpMethods.getMultipleArtists,
        mergedOptions,
        null
      )
    );
  };
};

export const getArtist = (artistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getArtist",
        urls.getArtist(artistId),
        httpMethods.getArtist,
        optional,
        null
      )
    );
  };
};

export const getArtistAlbums = (artistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getArtistAlbums",
        urls.getArtistAlbums(artistId),
        httpMethods.getArtistAlbums,
        optional,
        null
      )
    );
  };
};

export const getArtistTopTracks = (artistId, market, optional) => {
  return async dispatch => {
    const mergedOptions = {
      ...market,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getArtistTopTracks",
        urls.getArtistTopTracks(artistId),
        httpMethods.getArtistTopTracks,
        mergedOptions,
        null
      )
    );
  };
};

export const getArtistRelatedArtists = (artistId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getArtistRelatedArtists",
        urls.getArtistRelatedArtists(artistId),
        httpMethods.getArtistRelatedArtists,
        optional,
        null
      )
    );
  };
};
