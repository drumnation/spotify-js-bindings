const urls = {
  getAudioFeaturesForTrack: trackId => `/audio-features/${trackId}`,
  getTrack: trackId => `/tracks/${trackId}`,
  getAudioAnalysisForTrack: trackId => `/audio-analysis/${trackId}`,
  getAudioFeaturesForSeveralTracks: "/audio-features",
  getSeveralTracks: "/tracks"
};

export const httpMethods = {
  getAudioFeaturesForTrack: "GET",
  getTrack: "GET",
  getAudioAnalysisForTrack: "GET",
  getAudioFeaturesForSeveralTracks: "GET",
  getSeveralTracks: "GET"
};

export default urls;
