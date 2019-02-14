const urls = {
  getMultipleAlbums: "/albums",
  getAlbum: albumId => `/albums/${albumId}`,
  getAnAlbumTracks: albumId => `/albums/${albumId}/tracks`
};

export const httpMethods = {
  getMultipleAlbums: "GET",
  getAlbum: "GET",
  getAnAlbumTracks: "GET"
};

export default urls;
