import Spotify from "./config";

import * as albums from "./api/Albums";
import * as artists from "./api/Artists";
import * as browse from "./api/Browse";
import * as follow from "./api/Follow";
import * as library from "./api/Library";
import * as personalization from "./api/Personalization";
import * as player from "./api/Player";
import * as playlists from "./api/Playlists";
import * as search from "./api/Search";
import * as tracks from "./api/Tracks";
import * as userProfile from "./api/UserProfile";

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
  tracks,
  userProfile
};

export default Spotify;
