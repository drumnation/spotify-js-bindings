import host from "../../host";

const urls = {
  getAllCategories: `${host}/browse/categories`,
  getSingleBrowseCategory: categoryId =>
    `${host}/browse/categories/${categoryId}`,
  getCategoryPlaylists: categoryId =>
    `${host}/browse/categories/${categoryId}/playlists`,
  getReccomendations: `${host}/recommendations`,
  getAvailableGenreSeeds: `${host}/recommendations/available-genre-seeds`,
  getAllNewReleases: `${host}/browse/new-releases`,
  getAllFeaturedPlaylists: `${host}/browse/featured-playlists`
};

export const httpMethods = {
  getAllCategories: "GET",
  getSingleBrowseCategory: "GET",
  getCategoryPlaylists: "GET",
  getReccomendations: "GET",
  getAvailableGenreSeeds: "GET",
  getAllNewReleases: "GET",
  getAllFeaturedPlaylists: "GET"
};

export default urls;
