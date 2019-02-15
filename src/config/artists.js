export const urls = {
  getMultipleArtists: "/artists",
  getArtist: artistId => `/artists/${artistId}`,
  getArtistAlbums: artistId => `/artists/${artistId}/albums`,
  getArtistTopTracks: artistId => `/artists/${artistId}/top-tracks`,
  getArtistRelatedArtists: artistId => `/artists/${artistId}/related-artists`
};

export const httpMethods = {
  getMultipleArtists: "GET",
  getArtist: "GET",
  getArtistAlbums: "GET",
  getArtistTopTracks: "GET",
  getArtistRelatedArtists: "GET"
};
