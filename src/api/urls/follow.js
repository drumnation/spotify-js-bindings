const urls = {
  getFollowingStateForArtistsUsers: `/v1/me/following/contains`,
  checkIfUsersFollowPlaylist: playlistId =>
    `/v1/playlists/${playlistId}/followers/contains`,
  followArtistsOrUsers: `/v1/me/following`,
  followPlaylist: playlistId => `/playlists/${playlistId}/followers`,
  getUserFollowedArtists: `/me/following`,
  unfollowArtistsOrUsers: `/me/following`,
  unfollowPlaylist: playlistId => `/v1/playlists/${playlistId}/followers`
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

export default urls;
