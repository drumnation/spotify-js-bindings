import { userProfile, setSpotifyToken } from "../index";
import token from "../../token";

beforeAll(async () => {
  await setSpotifyToken(token);
});

describe("User Profile API", () => {
  describe("User Profile API tests with no params", () => {
    test("Get a User's Profile", async () => {
      const userId = "smedjan";
      const response = await userProfile.getUserProfile(userId);
      expect(response).toHaveProperty("display_name");
    });
    test("Get Current User Profile", async () => {
      const response = await userProfile.getCurrentUserProfile();
      expect(response).toHaveProperty("display_name");
    });
  });
});