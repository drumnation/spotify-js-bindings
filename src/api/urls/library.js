const urls = {
  checkUserSavedAlbums: "/me/albums/contains",
  saveTracksForUser: "/me/tracks",
  removeAlbumsForCurrentUser: "/me/albums",
  saveAlbumsForCurrentUser: "/me/albums",
  removeUserSavedTracks: "/me/tracks",
  getUserSavedAlbums: "/me/albums",
  getUserSavedTracks: "/me/tracks",
  checkUserSavedTracks: "/me/tracks/contains"
};

export const httpMethods = {
  checkUserSavedAlbums: "GET",
  saveTracksForUser: "PUT",
  removeAlbumsForCurrentUser: "DELETE",
  saveAlbumsForCurrentUser: "PUT",
  removeUserSavedTracks: "DELETE",
  getUserSavedAlbums: "GET",
  getUserSavedTracks: "GET",
  checkUserSavedTracks: "GET"
};

export default urls;
