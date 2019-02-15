export const urls = {
  skipUserPlaybackToNextTrack: "/me/player/next",
  seekToPositionInCurrentlyPlayingTrack: "/me/player/seek",
  getUserAvailableDevices: "/me/player/devices",
  toggleShuffleForUserPlayback: "/me/player/shuffle",
  transferUserPlayback: "/me/player",
  getCurrentUserRecentlyPlayedTracks: "/me/player/recently-played",
  startResumeUserPlayback: "/me/player/play",
  setRepeatModeOnUserPlayback: "/me/player/repeat",
  pauseUserPlayback: "/me/player/pause",
  skipUserPlaybackToPreviousTrack: "/me/player/previous",
  getInformationAboutUserCurrentPlayback: "/me/player",
  getUserCurrentlyPlayingTrack: "/me/player/currently-playing",
  setVolumeForUserPlayback: "/me/player/volume"
};

export const httpMethods = {
  skipUserPlaybackToNextTrack: "POST",
  seekToPositionInCurrentlyPlayingTrack: "PUT",
  getUserAvailableDevices: "GET",
  toggleShuffleForUserPlayback: "PUT",
  transferUserPlayback: "PUT",
  getCurrentUserRecentlyPlayedTracks: "GET",
  startResumeUserPlayback: "PUT",
  setRepeatModeOnUserPlayback: "PUT",
  pauseUserPlayback: "PUT",
  skipUserPlaybackToPreviousTrack: "POST",
  getInformationAboutUserCurrentPlayback: "GET",
  getUserCurrentlyPlayingTrack: "GET",
  setVolumeForUserPlayback: "PUT"
};
