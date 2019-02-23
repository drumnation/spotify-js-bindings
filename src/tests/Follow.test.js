import store from "../store";
import { setSpotifyToken } from "../redux";
import { follow } from "../index";
import token from "../../token";
import { isSuccessful } from "../helpers/conditionals";

beforeAll(async () => {
  await store.dispatch(setSpotifyToken(token));
});

describe("Follow API", () => {
  describe("Follow API tests with no params", () => {
    test("Get Following State for Artists/Users", async () => {
      const type = "artist";
      const ids = "5U827e4jbYz6EjtN0fIDt9,2CIMQHirSU0MQqyYHq0eOx,1s4OwCgHh16FZOkmmNLWeO"
      const categories = await follow.getFollowingStateForArtistsUsers(type, ids);
      expect(categories).toEqual([false, false, false]);
    });
    test("Check if Users Follow a Playlist", async () => {
      const playlistId = "3cEYpjA9oz9GiPac4AsH4n";
      const ids = "jmperezperez,thelinmichael,wizzler";
      const categories = await follow.checkIfUsersFollowPlaylist(playlistId, ids);
      expect(categories).toEqual([true, false, false]);
    });
    test("Follow Artists or Users", async () => {
      const type = "artist";
      const ids = "0AMoPrd9OLxMC38dQPnSQA,02umg9eoz6lshS5GVJ5KE0";
      const { status } = await follow.followArtistsOrUsers(type, ids);
      expect(isSuccessful(status)).toBe(true);
    });
    test("Follow Playlist", async () => {
      const playlistId = "2v3iNvBX8Ay1Gt2uXtUKUT";
      const body = { public: false };
      const { status } = await follow.followPlaylist(playlistId, body);
      expect(isSuccessful(status)).toBe(true);
    });
    test("Get Users Followed Artists", async () => {
      const type = "artist";
      const followedArtists = await follow.getUserFollowedArtists(type);
      expect(followedArtists).toHaveProperty("artists");
    });
    test("Unfollow Artists or Users", async () => {
      const type = "artist";
      const ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      const { status } = await follow.unfollowArtistsOrUsers(type, ids);
      expect(isSuccessful(status)).toBe(true);
    });
    test("Unfollow Playlist", async () => {
      const playlistId = "3SnvUaB6Z9aaCZ2P6PEJvy";
      const { status } = await follow.unfollowPlaylist(playlistId);
      expect(isSuccessful(status)).toBe(true);
    });
  });
});
