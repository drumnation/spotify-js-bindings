import TOKEN from "../secret";

export const host = "https://api.spotify.com/v1";

// creators

export const createFetchOptions = method => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    method
  };
};
