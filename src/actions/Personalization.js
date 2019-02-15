import spotifyFetch from "../helpers/fetch";
import { urls, httpMethods } from "../config/personalization";
import bindActionCreators from "../helpers/actions";

const getUserTopArtistsAndTracks = (type, optional) => {
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

const personalization = bindActionCreators({
  getUserTopArtistsAndTracks
});

export default personalization;
