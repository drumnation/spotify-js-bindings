import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/albums";
import bindActionCreators from "../helpers/actions";

const skipUserPlaybackToNextTrack = optional => {
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

const seekToPositionInCurrentlyPlayingTrack = (positionMs, optional) => {
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

const getUserAvailableDevices = optional => {
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

const toggleShuffleForUserPlayback = (state, optional) => {
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

const transferUserPlayback = (deviceIds, optional) => {
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

const getCurrentUserRecentlyPlayedTracks = optional => {
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

const startResumeUserPlayback = optional => {
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

const setRepeatModeOnUserPlayback = (state, optional) => {
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

const pauseUserPlayback = optional => {
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

const skipUserPlaybackToPreviousTrack = optional => {
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

const getInformationAboutUserCurrentPlayback = optional => {
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

const getUserCurrentlyPlayingTrack = (market, optional) => {
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

const setVolumeForUserPlayback = (volumePercent, optional) => {
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

const player = bindActionCreators({
  skipUserPlaybackToNextTrack,
  seekToPositionInCurrentlyPlayingTrack,
  getUserAvailableDevices,
  toggleShuffleForUserPlayback,
  transferUserPlayback,
  getCurrentUserRecentlyPlayedTracks,
  startResumeUserPlayback,
  setRepeatModeOnUserPlayback,
  pauseUserPlayback,
  skipUserPlaybackToPreviousTrack,
  getInformationAboutUserCurrentPlayback,
  getUserCurrentlyPlayingTrack,
  setVolumeForUserPlayback
});

export default player;
