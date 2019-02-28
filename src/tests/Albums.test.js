import { albums, setSpotifyToken } from "../index";
import token from "../../token";

beforeAll(async () => {
  await setSpotifyToken(token);
});

describe.skip("2. Albums API", () => {
  test("sample", async () => {});
});
