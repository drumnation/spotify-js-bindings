import store from "../store";
import { setSpotifyToken } from "../redux";
import { follow } from "../index";
import token from "../../token";

beforeAll(async () => {
  await store.dispatch(setSpotifyToken(token));
});

describe("Follow API", () => {
  describe("Follow API tests with no params", () => {
    test("Get Following State for Artists/Users", async () => {
      const type = "artist";
      const ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      const categories = await follow.getFollowingStateForArtistsUsers(type, ids);
      expect(categories).toEqual([false, true, false]);
    });
    test.only("Check if Users Follow a Playlist", async () => {
      const playlistId = "3cEYpjA9oz9GiPac4AsH4n";
      const ids = "jmperezperez,thelinmichael,wizzler";
      const categories = await follow.checkIfUsersFollowPlaylist(playlistId, ids);
      expect(categories).toEqual([true, false, false]);
    });
    test("Follow Artists or Users", async () => {
      const categories = await follow.followArtistsOrUsers();
      expect(categories).toHaveProperty("categories");
    });
    test("Follow Playlist", async () => {
      const json = await follow.followPlaylist();
      expect(json).toHaveProperty("categories");
    });
    test("Get Users Followed Artists", async () => {
      const categoryId = "dinner";
      const singleCategory = await follow.getUserFollowedArtists(categoryId);
      expect(singleCategory).toHaveProperty("id");
    });
    test("Unfollow Artists or Users", async () => {
      const categoryId = "dinner";
      const categoryPlaylists = await follow.unfollowArtistsOrUsers(categoryId);
      expect(categoryPlaylists).toHaveProperty("playlists");
    });
    test("Unfollow Playlist", async () => {
      const reccomendations = await follow.unfollowPlaylist();
      expect(reccomendations).toHaveProperty("seeds");
    });
  });
});
