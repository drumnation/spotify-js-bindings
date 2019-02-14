const urls = {
  getUserProfile: userId => `/users/${userId}`,
  getCurrentUserProfile: "/me"
};

export const httpMethods = {
  getUserProfile: "GET",
  getCurrentUserProfile: "GET"
};

export default urls;
