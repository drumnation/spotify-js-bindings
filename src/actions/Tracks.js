import spotifyFetch from "../helpers/fetch";
import { urls, httpMethods } from "../config/personalization";
import bindActionCreators from "../helpers/actions";

const getAudioFeaturesForTrack = (trackId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAudioFeaturesForTrack",
        urls.getAudioFeaturesForTrack(trackId),
        httpMethods.getAudioFeaturesForTrack,
        optional,
        null
      )
    );
  };
};

const getTrack = (trackId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getTrack",
        urls.getTrack(trackId),
        httpMethods.getTrack,
        optional,
        null
      )
    );
  };
};

const getAudioAnalysisForTrack = (trackId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAudioAnalysisForTrack",
        urls.getAudioAnalysisForTrack(trackId),
        httpMethods.getAudioAnalysisForTrack,
        optional,
        null
      )
    );
  };
};

const getAudioFeaturesForSeveralTracks = (trackIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: trackIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getAudioFeaturesForSeveralTracks",
        urls.getAudioFeaturesForSeveralTracks,
        httpMethods.getAudioFeaturesForSeveralTracks,
        mergedOptional,
        null
      )
    );
  };
};

const getSeveralTracks = (trackIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      ids: trackIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getSeveralTracks",
        urls.getSeveralTracks,
        httpMethods.getSeveralTracks,
        mergedOptional,
        null
      )
    );
  };
};

const tracks = bindActionCreators({
  getAudioFeaturesForTrack,
  getTrack,
  getAudioAnalysisForTrack,
  getAudioFeaturesForSeveralTracks,
  getSeveralTracks
});

export default tracks;
