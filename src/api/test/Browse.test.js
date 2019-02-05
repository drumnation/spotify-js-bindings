import { browse } from "../../index";

describe("Browse API tests", () => {
  test("Get All Categories", async () => {
    const categories = await browse.getAllCategories();
    expect(categories).toHaveProperty("categories");
  });
  test("Get A Single Category", async () => {
    const singleCategory = await browse.getASingleBrowseCategory("roots");
    expect(singleCategory).toHaveProperty("id");
  });
  test("Get Category Playlists", async () => {
    const categoryPlaylists = await browse.getACategorysPlaylists("roots");
    expect(categoryPlaylists).toHaveProperty("playlists");
  });
  test("Get Reccomendations Based on Seeds", async () => {
    const reccomendationsOptions = {
      market: "ES"
    };
    const limit = 10;
    const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
    const seedGenres = "classical,country";
    const seedTracks = "0c6xIDDpzE81m2q797ordA";
    const reccomendations = await browse.getReccomendations(
      limit,
      seedArtists,
      seedGenres,
      seedTracks,
      reccomendationsOptions
    );
    expect(reccomendations).toHaveProperty("seeds");
  });
});
