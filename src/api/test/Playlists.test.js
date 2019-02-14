import Spotify from "../../config";
import { playlists } from "../../index";
import token from "../../../secret";

beforeAll(() => {
  Spotify.setToken(token);
});

describe("Playlists API", () => {
  describe("Playlists API tests with no params", () => {
    test("Add Tracks to a Playlist", async () => {
      const response = await playlists.addTracksToPlaylist();
      expect(response).toHaveProperty("tracks");
    });
    //   test("Get a Playlist", async () => {
    //     const playlist = await playlists.getPlaylist();
    //     expect(playlist).toHaveProperty("playlist");
    //   });
    //   test("Remove Tracks from a Playlist", async () => {
    //     const filteredPlaylist = await playlists.removeTracksFromPlaylist();
    //     expect(filteredPlaylist).toHaveProperty("categories");
    //   });
    //   test("Get a Playlist's Tracks", async () => {
    //     const tracks = await playlists.getPlaylistTracks();
    //     expect(tracks).toHaveProperty("tracks");
    //   });
    //   test("Get a Playlist's Cover Image", async () => {
    //     const coverImage = await playlists.getPlaylistCoverImage();
    //     expect(coverImage).toHaveProperty("id");
    //   });
    //   test("Upload a Custom Playlist Cover Image", async () => {
    //     const response = await playlists.uploadCustomPlaylistCoverImage();
    //     expect(response).toHaveProperty("playlists");
    //   });
    //   test("Get a List of Current User's Playlists", async () => {
    //     const reccomendations = await playlists.getListCurrentUserPlaylists();
    //     expect(reccomendations).toHaveProperty("seeds");
    //   });
    //   test("Replace a Playlist's Tracks", async () => {
    //     const categoryPlaylists = await playlists.replacePlaylistTracks();
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    //   test("Create a Playlist", async () => {
    //     const categoryPlaylists = await playlists.createPlaylist();
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    //   test("Reorder a Playlist's Tracks", async () => {
    //     const categoryPlaylists = await playlists.reorderPlaylistTracks();
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    // });

    // describe("Playlists API tests with optional", () => {
    //   test("Add Tracks to a Playlist with optional", async () => {
    //     const categories = await playlists.getAllCategories();
    //     expect(categories).toHaveProperty("categories");
    //   });
    //   test("Get a Playlist with optional", async () => {
    //     const categories = await playlists.getAllCategories();
    //     expect(categories).toHaveProperty("categories");
    //   });
    //   test("Remove Tracks from a Playlist with optional", async () => {
    //     const categories = await playlists.getAllCategories();
    //     expect(categories).toHaveProperty("categories");
    //   });
    //   test("Get a Playlist's Tracks with optional", async () => {
    //     const json = await playlists.followPlaylist();
    //     expect(json).toHaveProperty("categories");
    //   });
    //   test("Get a Playlist's Cover Image with optional", async () => {
    //     const categoryId = "dinner";
    //     const singleCategory = await playlists.getSingleBrowseCategory(categoryId);
    //     expect(singleCategory).toHaveProperty("id");
    //   });
    //   test("Upload a Custom Playlist Cover Image with optional", async () => {
    //     const categoryId = "dinner";
    //     const categoryPlaylists = await playlists.getCategoryPlaylists(categoryId);
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    //   test("Get a List of Current User's Playlists with optional", async () => {
    //     const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    //     const seedGenres = "classical,country";
    //     const seedTracks = "0c6xIDDpzE81m2q797ordA";
    //     const reccomendations = await playlists.getReccomendations(
    //       seedArtists,
    //       seedGenres,
    //       seedTracks
    //     );
    //     expect(reccomendations).toHaveProperty("seeds");
    //   });
    //   test("Replace a Playlist's Tracks with optional", async () => {
    //     const categoryId = "dinner";
    //     const categoryPlaylists = await playlists.getCategoryPlaylists(categoryId);
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    //   test("Create a Playlist with optional", async () => {
    //     const categoryId = "dinner";
    //     const categoryPlaylists = await playlists.getCategoryPlaylists(categoryId);
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
    //   test("Reorder a Playlist's Tracks with optional", async () => {
    //     const categoryId = "dinner";
    //     const categoryPlaylists = await playlists.getCategoryPlaylists(categoryId);
    //     expect(categoryPlaylists).toHaveProperty("playlists");
    //   });
  });
});
