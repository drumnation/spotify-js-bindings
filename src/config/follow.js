export const urls = {
  getFollowingStateForArtistsUsers: `/me/following/contains`,
  checkIfUsersFollowPlaylist: playlistId =>
    `/playlists/${playlistId}/followers/contains`,
  followArtistsOrUsers: `/me/following`,
  followPlaylist: playlistId => `/playlists/${playlistId}/followers`,
  getUserFollowedArtists: `/me/following`,
  unfollowArtistsOrUsers: `/me/following`,
  unfollowPlaylist: playlistId => `/playlists/${playlistId}/followers`
};

export const httpMethods = {
  getFollowingStateForArtistsUsers: "GET",
  checkIfUsersFollowPlaylist: "GET",
  followArtistsOrUsers: "PUT",
  followPlaylist: "PUT",
  getUserFollowedArtists: "GET",
  unfollowArtistsOrUsers: "DELETE",
  unfollowPlaylist: "DELETE"
};
