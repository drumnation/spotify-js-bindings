const urls = {
  getAllCategories: `/browse/categories`,
  getSingleBrowseCategory: categoryId => `/browse/categories/${categoryId}`,
  getCategoryPlaylists: categoryId =>
    `/browse/categories/${categoryId}/playlists`,
  getReccomendations: `/recommendations`,
  getAvailableGenreSeeds: `/recommendations/available-genre-seeds`,
  getAllNewReleases: `/browse/new-releases`,
  getAllFeaturedPlaylists: `/browse/featured-playlists`
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
