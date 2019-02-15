import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/artists";
import bindActionCreators from "../helpers/actions";

const getMultipleArtists = (artistIds, optional) => {
  return async dispatch => {
    const mergedOptions = {
      ids: artistIds,
      ...optional
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

const getArtist = (artistId, optional) => {
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

const getArtistAlbums = (artistId, optional) => {
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

const getArtistTopTracks = (artistId, market, optional) => {
  return async dispatch => {
    const mergedOptions = {
      market,
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

const getArtistRelatedArtists = (artistId, optional) => {
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

const artists = bindActionCreators({
  getMultipleArtists,
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getArtistRelatedArtists
});

export default artists;
