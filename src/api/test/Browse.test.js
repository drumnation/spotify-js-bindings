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
    const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    const seedGenres = "classical,country";
    const seedTracks = "0c6xIDDpzE81m2q797ordA";
    const reccomendations = await browse.getReccomendations(
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

describe("Browse API tests with optional", () => {
  test("Get All Categories with optional", async () => {
    const optional = {
      country: "MX",
      locale: "es_MX", // meaning “Spanish (Mexico)”
      limit: 10,
      offset: 100
    };
    const categories = await browse.getAllCategories(optional);
    expect(categories).toHaveProperty("categories");
  });
  test("Get A Single Category with optional", async () => {
    const categoryId = "dinner";
    const optional = {
      country: "SE",
      locale: "sv_SE"
    };
    const singleCategory = await browse.getASingleBrowseCategory(
      categoryId,
      optional
    );
    expect(singleCategory).toHaveProperty("id");
  });
  test("Get Category Playlists with optional", async () => {
    const categoryId = "dinner";
    const optional = {
      country: "SE",
      limit: 10,
      offset: 5
    };
    const categoryPlaylists = await browse.getCategoryPlaylists(
      categoryId,
      optional
    );
    expect(categoryPlaylists).toHaveProperty("playlists");
  });
  test("Get Reccomendations Based on Seeds with optional", async () => {
    const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    const seedGenres = "classical,country";
    const seedTracks = "0c6xIDDpzE81m2q797ordA";
    const optional = {
      limit: 10,
      market: "ES",
      minAcousticness: 0,
      maxAcousticness: 1,
      targetAcousticness: 0.00000242,
      minDanceability: 0,
      maxDanceability: 1,
      targetDanceability: 0.245,
      minDurationMs: 0,
      maxDurationMs: 516107,
      targetDurationMs: 216107,
      minEnergy: 0,
      maxEnergy: 1,
      targetEnergy: 0.981,
      minInstrumentalness: 0,
      maxInstrumentalness: 1,
      targetInstrumentalness: 0.936,
      minKey: 1,
      maxKey: 9,
      targetKey: 7,
      minLiveness: 0,
      maxLiveness: 1,
      targetLiveness: 0.222,
      minLoudness: -60,
      maxLoudness: 60,
      targetLoudness: -7.555,
      minMode: 0,
      maxMode: 1,
      targetMode: 1,
      minPopularity: 1,
      maxPopularity: 100,
      targetPopularity: 51,
      minSpeechiness: 0,
      maxSpeechiness: 1,
      targetSpeechiness: 0.17,
      minTempo: 100,
      maxTempo: 160,
      targetTempo: 114.378,
      minTimeSignature: 3,
      maxTimeSignature: 13,
      targetTimeSignature: 3,
      minValence: 0,
      maxValence: 1,
      targetValence: 0.309
    };
    const reccomendations = await browse.getReccomendations(
      seedArtists,
      seedGenres,
      seedTracks,
      optional
    );
    expect(reccomendations).toHaveProperty("seeds");
  });
  test("Get Reccomendation Genres with optional", async () => {
    const optional = {
      country: "US",
      limit: 10,
      offset: 5
    };
    const reccomendationGenres = await browse.getReccomendationGenres(optional);
    expect(reccomendationGenres).toHaveProperty("genres");
  });
  test("Get All New Releases with optional", async () => {
    const optional = {
      country: "US",
      limit: 10,
      offset: 5
    };
    const allNewReleases = await getAllNewReleases(optional);
    expect(allNewReleases).toHaveProperty("albums");
  });
  test("Get All Featured Playlists with optional", async () => {
    const optional = {
      country: "US",
      locale: "sv_SE",
      timestamp: "2014-10-23T09:00:00",
      limit: 10,
      offset: 5
    };
    const allFeaturedPlaylists = await getAllFeaturedPlaylists(optional);
    expect(allFeaturedPlaylists).toHaveProperty("playlists");
  });
});
