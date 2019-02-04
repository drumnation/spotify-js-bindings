import { browse } from "../index";
import getAllCategories from "./mocks/Browse/getAllCategories.json";
import getSingleCategory from "./mocks/Browse/getSingleCategory.json";
import getCategoryPlaylists from "./mocks/Browse/getCategoryPlaylists.json";

describe("Browse API tests", () => {
  test("Get All Categories", async () => {
    const categories = await browse.getAllCategories();
    expect(categories).toEqual(getAllCategories);
  });
  test("Get A Single Category", async () => {
    const singleCategory = await browse.getASingleBrowseCategory("roots");
    expect(singleCategory).toEqual(getSingleCategory);
  });
  test("Get Category Playlists", async () => {
    const categoryPlaylists = await browse.getACategorysPlaylists("roots");
    expect(categoryPlaylists).toEqual(getCategoryPlaylists);
  });
  // test("Get Reccomendations based on Seeds", async () => {
  //   const reccomendationsOptions = {
  //     market: "US",
  //     seedTracks: "5tnvEAyp1VgyaIaPAOIqiW"
  //   };
  //   const reccomendations = await browse.getReccomendationsBasedOnSeeds(
  //     reccomendationsOptions
  //   );
  //   expect(reccomendations).toEqual("Hello, foo!");
  // });
});
