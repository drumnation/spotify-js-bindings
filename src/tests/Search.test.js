import { search, setSpotifyToken } from "../index";
import token from "../../token";
import { isSuccessful } from "../helpers/conditionals";

beforeAll(async () => {
  await setSpotifyToken(token);
});

describe("Search API", () => {
  describe("Search API tests with no params", () => {
    test("Search for an Item", async () => {
      const query = "Muse";
      const type = "track,artist";
      const response = await search.searchForItem(
        query,
        type,
      );
      expect(response).toHaveProperty("artists");
    });
  });
  describe("Search API tests with optional params", () => {
    test("Search for an Item", async () => {
      const query = "Muse";
      const type = "track,artist";
      const optional = {
        market: "US",
        limit: 10,
        offset: 5
      };
      const response = await search.searchForItem(
        query,
        type,
        optional
      );
      expect(response).toHaveProperty("artists");
    });
  });
});