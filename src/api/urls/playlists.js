import host from "../../host";

const urls = {
  addTracksToPlaylist: playlistId => `${host}/playlists/${playlistId}/tracks`,
  getPlaylist: playlistId => `${host}/playlists/${playlistId}`,
  removeTracksFromPlaylist: playlistId =>
    `${host}/playlists/${playlistId}/tracks`,
  getPlaylistTracks: playlistId => `${host}/playlists/${playlistId}/tracks`,
  getPlaylistCoverImage: playlistId => `${host}/playlists/${playlistId}/images`,
  uploadCustomPlaylistCoverImage: playlistId =>
    `${host}/playlists/${playlistId}/images`,
  getListOfCurrentUserPlaylists: `${host}/me/playlists`,
  changePlaylistDetails: playlistId => `${host}/playlists/${playlistId}`,
  getListOfUserPlaylists: userId => `${host}/users/${userId}/playlists`,
  reorderOrReplacePlaylistTracks: playlistId =>
    `${host}/playlists/${playlistId}/tracks`,
  createPlaylist: userId => `${host}/users/${userId}/playlists`,
  reorderPlaylistTracks: playlistId => `${host}/playlists/${playlistId}/tracks`
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

export default urls;
