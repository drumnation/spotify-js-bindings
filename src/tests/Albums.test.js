import store from "../store";
import { setSpotifyToken } from "../redux";
import { albums } from "../index";
import token from "../../token";

beforeAll(async () => {
  await store.dispatch(setSpotifyToken(token));
});