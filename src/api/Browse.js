import spotifyApiRequest from "../helpers/apiRequest";
import urls, { httpMethods } from "./urls/browse";

export const getAllCategories = async optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getAllCategories",
        urls.getAllCategories,
        httpMethods.getAllCategories,
        optional
      )
    );
  };
};

export const getSingleBrowseCategory = async (categoryId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getSingleBrowseCategory",
        urls.getSingleBrowseCategory(categoryId),
        httpMethods.getSingleBrowseCategory,
        optional
      )
    );
  };
};

export const getCategoryPlaylists = async (categoryId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getCategoryPlaylists",
        urls.getCategoryPlaylists(categoryId),
        httpMethods.getCategoryPlaylists,
        optional
      )
    );
  };
};

export const getReccomendations = async (
  seedArtists,
  seedGenres,
  seedTracks,
  optional
) => {
  return async dispatch => {
    const mergedOptional = {
      ...optional,
      seedArtists,
      seedGenres,
      seedTracks
    };
    return dispatch(
      spotifyApiRequest(
        "getCategoryPlaylists",
        urls.getReccomendations,
        httpMethods.getReccomendations,
        mergedOptional
      )
    );
  };
};

export const getReccomendationGenres = async () => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getReccomendationGenres",
        urls.getAvailableGenreSeeds,
        httpMethods.getReccomendationGenres,
        null,
        null
      )
    );
  };
};

export const getAllNewReleases = async optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getAllNewReleases",
        urls.getAllNewReleases,
        httpMethods.getAllNewReleases,
        optional
      )
    );
  };
};

export const getAllFeaturedPlaylists = async optional => {
  return async dispatch => {
    return dispatch(
      spotifyApiRequest(
        "getAllFeaturedPlaylists",
        urls.getAllFeaturedPlaylists,
        httpMethods.getAllFeaturedPlaylists,
        optional
      )
    );
  };
};
