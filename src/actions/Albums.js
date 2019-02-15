import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/albums";
import bindActionCreators from "../helpers/actions";

const getMultipleAlbums = (albumIds, optional) => {
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

const getAlbum = (albumId, optional) => {
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

const getAnAlbumTracks = (albumId, optional) => {
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

const albums = bindActionCreators({
  getMultipleAlbums,
  getAlbum,
  getAnAlbumTracks
});

export default albums;
