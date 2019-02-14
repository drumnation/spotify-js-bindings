import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/personalization";

export const getUserTopArtistsAndTracks = (type, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getUserTopArtistsAndTracks",
        urls.getUserTopArtistsAndTracks(type),
        httpMethods.getUserTopArtistsAndTracks,
        optional,
        null
      )
    );
  };
};
