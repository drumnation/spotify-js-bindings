import spotifyFetch from "../helpers/fetch";

import urls, { httpMethods } from "./urls/albums";

export const skipUserPlaybackToNextTrack = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "skipUserPlaybackToNextTrack",
        urls.skipUserPlaybackToNextTrack,
        httpMethods.skipUserPlaybackToNextTrack,
        optional,
        null
      )
    );
  };
};

export const seekToPositionInCurrentlyPlayingTrack = (positionMs, optional) => {
  return async dispatch => {
    const mergedOptional = {
      positionMs,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "seekToPositionInCurrentlyPlayingTrack",
        urls.seekToPositionInCurrentlyPlayingTrack,
        httpMethods.seekToPositionInCurrentlyPlayingTrack,
        mergedOptional,
        null
      )
    );
  };
};

export const getUserAvailableDevices = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getUserAvailableDevices",
        urls.getUserAvailableDevices,
        httpMethods.getUserAvailableDevices,
        optional,
        null
      )
    );
  };
};

export const toggleShuffleForUserPlayback = (state, optional) => {
  return async dispatch => {
    const mergedOptional = {
      state,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "toggleShuffleForUserPlayback",
        urls.toggleShuffleForUserPlayback,
        httpMethods.toggleShuffleForUserPlayback,
        mergedOptional,
        null
      )
    );
  };
};

export const transferUserPlayback = (deviceIds, optional) => {
  return async dispatch => {
    const mergedOptional = {
      deviceIds,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "transferUserPlayback",
        urls.transferUserPlayback,
        httpMethods.transferUserPlayback,
        mergedOptional,
        null
      )
    );
  };
};

export const getCurrentUserRecentlyPlayedTracks = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getCurrentUserRecentlyPlayedTracks",
        urls.getCurrentUserRecentlyPlayedTracks,
        httpMethods.getCurrentUserRecentlyPlayedTracks,
        optional,
        null
      )
    );
  };
};

export const startResumeUserPlayback = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "startResumeUserPlayback",
        urls.startResumeUserPlayback,
        httpMethods.startResumeUserPlayback,
        optional,
        null
      )
    );
  };
};

export const setRepeatModeOnUserPlayback = (state, optional) => {
  return async dispatch => {
    const mergedOptional = {
      state,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "setRepeatModeOnUserPlayback",
        urls.setRepeatModeOnUserPlayback,
        httpMethods.setRepeatModeOnUserPlayback,
        mergedOptional,
        null
      )
    );
  };
};

export const pauseUserPlayback = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "pauseUserPlayback",
        urls.pauseUserPlayback,
        httpMethods.pauseUserPlayback,
        optional,
        null
      )
    );
  };
};

export const skipUserPlaybackToPreviousTrack = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "skipUserPlaybackToPreviousTrack",
        urls.skipUserPlaybackToPreviousTrack,
        httpMethods.skipUserPlaybackToPreviousTrack,
        optional,
        null
      )
    );
  };
};

export const getInformationAboutUserCurrentPlayback = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getInformationAboutUserCurrentPlayback",
        urls.getInformationAboutUserCurrentPlayback,
        httpMethods.getInformationAboutUserCurrentPlayback,
        optional,
        null
      )
    );
  };
};

export const getUserCurrentlyPlayingTrack = (market, optional) => {
  return async dispatch => {
    const mergedOptional = {
      market,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "getUserCurrentlyPlayingTrack",
        urls.getUserCurrentlyPlayingTrack,
        httpMethods.getUserCurrentlyPlayingTrack,
        mergedOptional,
        null
      )
    );
  };
};

export const setVolumeForUserPlayback = (volumePercent, optional) => {
  return async dispatch => {
    const mergedOptional = {
      volumePercent,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "setVolumeForUserPlayback",
        urls.setVolumeForUserPlayback,
        httpMethods.setVolumeForUserPlayback,
        mergedOptional,
        null
      )
    );
  };
};
