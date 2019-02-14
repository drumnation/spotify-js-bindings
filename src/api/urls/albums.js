const urls = {
  getMultipleAlbums: "/albums",
  getAlbum: albumId => `/albums/${albumId}`,
  getAlbumTracks: albumId => `/albums/${albumId}/tracks`
};

export const httpMethods = {
  getMultipleAlbums: "GET",
  getAlbum: "GET",
  getAlbumTracks: "GET"
};

export default urls;
