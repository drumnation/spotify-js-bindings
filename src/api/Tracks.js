import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/tracks";

export const getAudioFeaturesForTrack = (trackId, optional) => {
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

export const getTrack = (trackId, optional) => {
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

export const getAudioAnalysisForTrack = (trackId, optional) => {
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

export const getAudioFeaturesForSeveralTracks = (trackIds, optional) => {
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

export const getSeveralTracks = (trackIds, optional) => {
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
