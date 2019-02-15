export const urls = {
  addTracksToPlaylist: playlistId => `/playlists/${playlistId}/tracks`,
  getPlaylist: playlistId => `/playlists/${playlistId}`,
  removeTracksFromPlaylist: playlistId => `/playlists/${playlistId}/tracks`,
  getPlaylistTracks: playlistId => `/playlists/${playlistId}/tracks`,
  getPlaylistCoverImage: playlistId => `/playlists/${playlistId}/images`,
  uploadCustomPlaylistCoverImage: playlistId =>
    `/playlists/${playlistId}/images`,
  getListOfCurrentUserPlaylists: `/me/playlists`,
  changePlaylistDetails: playlistId => `/playlists/${playlistId}`,
  getListOfUserPlaylists: userId => `/users/${userId}/playlists`,
  reorderOrReplacePlaylistTracks: playlistId =>
    `/playlists/${playlistId}/tracks`,
  createPlaylist: userId => `/users/${userId}/playlists`,
  reorderPlaylistTracks: playlistId => `/playlists/${playlistId}/tracks`
};

export const httpMethods = {
  addTracksToPlaylist: "POST",
  getPlaylist: "GET",
  removeTracksFromPlaylist: "DELETE",
  getPlaylistTracks: "GET",
  getPlaylistCoverImage: "GET",
  uploadCustomPlaylistCoverImage: "PUT",
  getListOfCurrentUserPlaylists: "GET",
  changePlaylistDetails: "PUT",
  getListOfUserPlaylists: "GET",
  reorderOrReplacePlaylistTracks: "PUT",
  createPlaylist: "POST",
  reorderPlaylistTracks: "PUT"
};
