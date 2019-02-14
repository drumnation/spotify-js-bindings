import spotifyFetch from "../helpers/fetch";

import urls, { httpMethods } from "./urls/browse";

export const getAllCategories = async optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAllCategories",
        urls.getAllCategories,
        httpMethods.getAllCategories,
        optional,
        null
      )
    );
  };
};

export const getSingleBrowseCategory = async (categoryId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getSingleBrowseCategory",
        urls.getSingleBrowseCategory(categoryId),
        httpMethods.getSingleBrowseCategory,
        optional,
        null
      )
    );
  };
};

export const getCategoryPlaylists = async (categoryId, optional) => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getCategoryPlaylists",
        urls.getCategoryPlaylists(categoryId),
        httpMethods.getCategoryPlaylists,
        optional,
        null
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
      spotifyFetch(
        "getCategoryPlaylists",
        urls.getReccomendations,
        httpMethods.getReccomendations,
        mergedOptional,
        null
      )
    );
  };
};

export const getReccomendationGenres = async () => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
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
      spotifyFetch(
        "getAllNewReleases",
        urls.getAllNewReleases,
        httpMethods.getAllNewReleases,
        optional,
        null
      )
    );
  };
};

export const getAllFeaturedPlaylists = async optional => {
  return async dispatch => {
    return dispatch(
      spotifyFetch(
        "getAllFeaturedPlaylists",
        urls.getAllFeaturedPlaylists,
        httpMethods.getAllFeaturedPlaylists,
        optional,
        null
      )
    );
  };
};
