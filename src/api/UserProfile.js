import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/user";

export const getUserProfile = (userId, optional) => {
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

export const getCurrentUserProfile = optional => {
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
