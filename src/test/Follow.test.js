import store from "../../store";
import { setSpotifyToken } from "../redux";
import { follow } from "../index";
import token from "../../secret";

describe("Follow API", () => {
  describe("Follow API tests with no params", () => {
    test("Get Following State for Artists/Users", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Check if Users Follow a Playlist", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Follow Artists or Users", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Follow Playlist", async () => {
      const json = await follow.followPlaylist();
      expect(json).toHaveProperty("categories");
    });
    test("Get Users Followed Artists", async () => {
      const categoryId = "dinner";
      const singleCategory = await follow.getSingleBrowseCategory(categoryId);
      expect(singleCategory).toHaveProperty("id");
    });
    test("Unfollow Artists or Users", async () => {
      const categoryId = "dinner";
      const categoryPlaylists = await follow.getCategoryPlaylists(categoryId);
      expect(categoryPlaylists).toHaveProperty("playlists");
    });
    test("Unfollow Playlist", async () => {
      const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
      const seedGenres = "classical,country";
      const seedTracks = "0c6xIDDpzE81m2q797ordA";
      const reccomendations = await follow.getReccomendations(
        seedArtists,
        seedGenres,
        seedTracks
      );
      expect(reccomendations).toHaveProperty("seeds");
    });
  });

  describe("Follow API tests with optional", () => {
    test("Get Following State with optional", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Check if Users Follow a Playlist with optional", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Follow Artists or Users with optional", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Follow Playlist with optional", async () => {
      const categories = await follow.getAllCategories();
      expect(categories).toHaveProperty("categories");
    });
    test("Get Users Followed Artists with optional", async () => {
      const categoryId = "dinner";
      const singleCategory = await follow.getSingleBrowseCategory(categoryId);
      expect(singleCategory).toHaveProperty("id");
    });
    test("Unfollow Artists or Users with optional", async () => {
      const categoryId = "dinner";
      const categoryPlaylists = await follow.getCategoryPlaylists(categoryId);
      expect(categoryPlaylists).toHaveProperty("playlists");
    });
    test("Unfollow Playlist with optional", async () => {
      const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
      const seedGenres = "classical,country";
      const seedTracks = "0c6xIDDpzE81m2q797ordA";
      const reccomendations = await follow.getReccomendations(
        seedArtists,
        seedGenres,
        seedTracks
      );
      expect(reccomendations).toHaveProperty("seeds");
    });
  });
});
