import { setSpotifyToken } from "./redux";

import albums from "./actions/Albums";
import artists from "./actions/Artists";
import browse from "./actions/Browse";
import follow from "./actions/Follow";
import library from "./actions/Library";
import personalization from "./actions/Personalization";
import player from "./actions/Player";
import playlists from "./actions/Playlists";
import search from "./actions/Search";
import tracks from "./actions/Tracks";
import userProfile from "./actions/UserProfile";

export {
  albums,
  artists,
  browse,
  follow,
  library,
  personalization,
  player,
  playlists,
  search,
  setSpotifyToken,
  tracks,
  userProfile
};
