import bindActionCreators from "../helpers/actions";
import spotifyFetch from "../helpers/fetch";

import { urls, httpMethods } from "../config/browse";

const getAllCategories = optional => {
  return async dispatch => {
    const categories = await dispatch(
      spotifyFetch(
        "getAllCategories",
        urls.getAllCategories,
        httpMethods.getAllCategories,
        optional,
        null
      )
    );
    return categories;
  };
};

const getSingleBrowseCategory = (categoryId, optional) => {
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

const getCategoryPlaylists = (categoryId, optional) => {
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

const getReccomendations = (seedArtists, seedGenres, seedTracks, optional) => {
  return async dispatch => {
    const mergedOptional = {
      seedArtists,
      seedGenres,
      seedTracks,
      ...optional
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

const getReccomendationGenres = () => {
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

const getAllNewReleases = optional => {
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

const getAllFeaturedPlaylists = optional => {
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

const browse = bindActionCreators({
  getAllCategories,
  getSingleBrowseCategory,
  getCategoryPlaylists,
  getReccomendations,
  getReccomendationGenres,
  getAllNewReleases,
  getAllFeaturedPlaylists
});

export default browse;
