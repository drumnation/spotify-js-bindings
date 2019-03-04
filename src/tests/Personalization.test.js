import { personalization, setSpotifyToken } from "../index";
import token from "../../token";
import { isSuccessful } from "../helpers/conditionals";

beforeAll(async () => {
  await setSpotifyToken(token);
});

describe("Personalization API", () => {
  describe("Personalization API tests with no params", () => {
    test("Get a User's Top Artists and Tracks", async () => {
      const query = "Muse";
      const type = "tracks";
      const response = await personalization.getUserTopArtistsAndTracks(type);
      expect(response).toHaveProperty("href");
    });
  });
  describe("Personalization API tests with optional params", () => {
    test("Get a User's Top Artists and Tracks", async () => {
      const type = "tracks"
      const optional = {
        limit: 20,
        offset: 5,
        timeRange: "longTerm" 
      };
      const response = await personalization.getUserTopArtistsAndTracks(type);
      expect(response).toHaveProperty("href");
    });
  });
});