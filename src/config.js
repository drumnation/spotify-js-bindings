export const host = "https://api.spotify.com/v1";

// authorization

const Spotify = (function() {
  let token =
    "BQDBFKsKK3hXsxxJLorvgVdaZ8AoOn-SXBKgL56McYjbDTCmDmOwhUwuoxd5tiOPe3SvjA1VedHDddJg5cW1ekr7ArBxb1theroVU05IlJzmKCWq7IccvaEAyTZuogfMTf8bC5VrEIuXjSHv0RNNi2CNSbfw7QWFFUHhRNV4Q9bw1B1HkxQLfddaq9WreURlPvXWC_cLB2dQs9C6-VA48GWNJs7KXJAXhcAr9CLK6ty7XLThBuCvnRjUVu7pSo18TdbpTyWGnvFPlgA34Q";
  // const getToken = () => token;
  const setToken = newToken => {
    token = newToken;
  };
  const createFetchOptions = (method, bodyContent) => {
    const optionalBody = { uris: bodyContent };
    const body = bodyContent !== undefined ? optionalBody : null;
    return {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body,
      method
    };
  };
  return {
    // getToken,
    setToken,
    createFetchOptions
  };
})();

// Spotify.setToken(token); // Only for development

export default Spotify;

// creators

// export class Authorization {
//   constructor(token) {
//     this.token = token;
//   }

//   getToken = () => {
//     return this.token;
//   };

//   setToken = token => {
//     this.token = token;
//   };

//   createFetchOptions = (method, bodyContent) => {
//     const body = { uris: bodyContent };
//     const optionalBody = bodyContent !== undefined ? body : null;
//     return {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${this.token}`
//       },
//       optionalBody,
//       method
//     };
//   };
// }
