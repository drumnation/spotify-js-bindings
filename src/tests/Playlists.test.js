import { playlists, setSpotifyToken } from "../index";
import token from "../../token";

beforeAll(async () => {
  await setSpotifyToken(token);
});

describe("1. Playlists API", () => {
  describe("Playlists API tests with no params", () => {
    test("Create a Playlist", async () => {
      const categoryPlaylists = await playlists.createPlaylist();
      expect(categoryPlaylists).toHaveProperty("playlists");
    });
    test("Add Tracks to a Playlist", async () => {
      const response = await playlists.addTracksToPlaylist();
      expect(response).toHaveProperty("tracks");
    });
    // test("Get a Playlist", async () => {
    //   const playlist = await playlists.getPlaylist();
    //   expect(playlist).toHaveProperty("playlist");
    // });
    // test("Remove Tracks from a Playlist", async () => {
    //   const filteredPlaylist = await playlists.removeTracksFromPlaylist();
    //   expect(filteredPlaylist).toHaveProperty("categories");
    // });
    // test("Get a Playlist's Tracks", async () => {
    //   const tracks = await playlists.getPlaylistTracks();
    //   expect(tracks).toHaveProperty("tracks");
    // });
    // test("Get a Playlist's Cover Image", async () => {
    //   const coverImage = await playlists.getPlaylistCoverImage();
    //   expect(coverImage).toHaveProperty("id");
    // });
    // test("Upload a Custom Playlist Cover Image", async () => {
    //   const response = await playlists.uploadCustomPlaylistCoverImage();
    //   expect(response).toHaveProperty("playlists");
    // });
    // test("Get a List of Current User's Playlists", async () => {
    //   const reccomendations = await playlists.getListCurrentUserPlaylists();
    //   expect(reccomendations).toHaveProperty("seeds");
    // });
    // test("Replace a Playlist's Tracks", async () => {
    //   const categoryPlaylists = await playlists.replacePlaylistTracks();
    //   expect(categoryPlaylists).toHaveProperty("playlists");
    // });
    // test("Reorder a Playlist's Tracks", async () => {
    //   const categoryPlaylists = await playlists.reorderPlaylistTracks();
    //   expect(categoryPlaylists).toHaveProperty("playlists");
    // });
  });
});
