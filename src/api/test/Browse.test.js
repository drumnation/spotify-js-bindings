import { browse } from "../../index";
import { getAllNewReleases, getAllFeaturedPlaylists } from "../Browse";

describe("Browse API tests", () => {
  test("Get All Categories", async () => {
    const categories = await browse.getAllCategories();
    expect(categories).toHaveProperty("categories");
  });
  test("Get A Single Category", async () => {
    const categoryId = "dinner";
    const singleCategory = await browse.getASingleBrowseCategory(categoryId);
    expect(singleCategory).toHaveProperty("id");
  });
  test("Get Category Playlists", async () => {
    const categoryId = "dinner";
    const categoryPlaylists = await browse.getCategoryPlaylists(categoryId);
    expect(categoryPlaylists).toHaveProperty("playlists");
  });
  test("Get Reccomendations Based on Seeds", async () => {
    const limit = 10;
    const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    const seedGenres = "classical,country";
    const seedTracks = "0c6xIDDpzE81m2q797ordA";
    const reccomendations = await browse.getReccomendations(
      limit,
      seedArtists,
      seedGenres,
      seedTracks
    );
    expect(reccomendations).toHaveProperty("seeds");
  });
  test("Get Reccomendation Genres", async () => {
    const reccomendationGenres = await browse.getReccomendationGenres();
    expect(reccomendationGenres).toHaveProperty("genres");
  });
  test("Get Available Genre Seeds", async () => {
    const availableGenreSeeds = await browse.getAvailableGenreSeeds();
    expect(availableGenreSeeds).toHaveProperty("genres");
  });
  test("Get All New Releases", async () => {
    const allNewReleases = await getAllNewReleases();
    expect(allNewReleases).toHaveProperty("albums");
  });
  test("Get All Featured Playlists", async () => {
    const allFeaturedPlaylists = await getAllFeaturedPlaylists();
    expect(allFeaturedPlaylists).toHaveProperty("playlists");
  });
});

describe("Browse API tests with params", () => {
  test("Get All Categories with params", async () => {
    const params = {
      country: "MX",
      locale: "es_MX", // meaning “Spanish (Mexico)”
      limit: 10,
      offset: 100
    };
    const categories = await browse.getAllCategories(params);
    expect(categories).toHaveProperty("categories");
  });
  test("Get A Single Category with params", async () => {
    const categoryId = "dinner";
    const params = {
      country: "SE",
      locale: "sv_SE"
    };
    const singleCategory = await browse.getASingleBrowseCategory(
      categoryId,
      params
    );
    expect(singleCategory).toHaveProperty("id");
  });
  test("Get Category Playlists with params", async () => {
    const categoryId = "dinner";
    const params = {
      country: "SE",
      limit: 10,
      offset: 5
    };
    const categoryPlaylists = await browse.getCategoryPlaylists(
      categoryId,
      params
    );
    expect(categoryPlaylists).toHaveProperty("playlists");
  });
  test("Get Reccomendations Based on Seeds with params", async () => {
    const limit = 10;
    const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    const seedGenres = "classical,country";
    const seedTracks = "0c6xIDDpzE81m2q797ordA";
    const params = {
      market: "ES",
      min_acousticness: 0,
      max_acousticness: 1,
      target_acousticness: 0.00000242,
      min_danceability: 0,
      max_danceability: 1,
      target_danceability: 0.245,
      min_duration_ms: 0,
      max_duration_ms: 516107,
      target_duration_ms: 216107,
      min_energy: 0,
      max_energy: 1,
      target_energy: 0.981,
      min_instrumentalness: 0,
      max_instrumentalness: 1,
      target_instrumentalness: 0.936,
      min_key: 1,
      max_key: 9,
      target_key: 7,
      min_liveness: 0,
      max_liveness: 1,
      target_liveness: 0.222,
      min_loudness: -60,
      max_loudness: 60,
      target_loudness: -7.555,
      min_mode: 0,
      max_mode: 1,
      target_mode: 1,
      min_popularity: 1,
      max_popularity: 100,
      target_popularity: 51,
      min_speechiness: 0,
      max_speechiness: 1,
      target_speechiness: 0.17,
      min_tempo: 100,
      max_tempo: 160,
      target_tempo: 114.378,
      min_time_signature: 3,
      max_time_signature: 13,
      target_time_signature: 3,
      min_valence: 0,
      max_valence: 1,
      target_valence: 0.309
    };
    const reccomendations = await browse.getReccomendations(
      limit,
      seedArtists,
      seedGenres,
      seedTracks,
      params
    );
    expect(reccomendations).toHaveProperty("seeds");
  });
  test("Get Reccomendation Genres with params", async () => {
    const params = {
      country: "US",
      limit: 10,
      offset: 5
    };
    const reccomendationGenres = await browse.getReccomendationGenres(params);
    expect(reccomendationGenres).toHaveProperty("genres");
  });
  test("Get All New Releases with params", async () => {
    const params = {
      country: "US",
      limit: 10,
      offset: 5
    };
    const allNewReleases = await getAllNewReleases(params);
    expect(allNewReleases).toHaveProperty("albums");
  });
  test("Get All Featured Playlists", async () => {
    const allFeaturedPlaylists = await getAllFeaturedPlaylists();
    expect(allFeaturedPlaylists).toHaveProperty("playlists");
  });
  test("Get All Featured Playlists with params", async () => {
    const params = {
      country: "US",
      locale: "sv_SE",
      timestamp: "2014-10-23T09:00:00",
      limit: 10,
      offset: 5
    };
    const allFeaturedPlaylists = await getAllFeaturedPlaylists(params);
    expect(allFeaturedPlaylists).toHaveProperty("playlists");
  });
});
