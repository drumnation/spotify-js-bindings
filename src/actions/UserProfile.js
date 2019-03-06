import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/userProfile";
import bindActionCreators from "../helpers/actions";

const getUserProfile = (userId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getUserProfile",
        urls.getUserProfile(userId),
        httpMethods.getUserProfile,
        optional,
        null
      )
    );
  };
};

const getCurrentUserProfile = optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getCurrentUserProfile",
        urls.getCurrentUserProfile,
        httpMethods.getCurrentUserProfile,
        optional,
        null
      )
    );
  };
};

const userProfile = bindActionCreators({
  getUserProfile,
  getCurrentUserProfile
});

export default userProfile;
