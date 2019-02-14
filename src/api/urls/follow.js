import host from "../../host";

const urls = {
  getFollowingStateForArtistsUsers: `${host}/v1/me/following/contains`,
  checkIfUsersFollowPlaylist: playlistId =>
    `${host}/v1/playlists/${playlistId}/followers/contains`,
  followArtistsOrUsers: `${host}/v1/me/following`,
  followPlaylist: playlistId => `${host}/playlists/${playlistId}/followers`,
  getUserFollowedArtists: `${host}/me/following`,
  unfollowArtistsOrUsers: `${host}/me/following`,
  unfollowPlaylist: playlistId => `${host}/v1/playlists/${playlistId}/followers`
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
