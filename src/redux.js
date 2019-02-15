/* eslint-disable no-param-reassign */
import fetch from "isomorphic-fetch";
import { hasBodyContent, hasOptionalParams } from "./helpers/conditionals";
import createQueryString from "./helpers/query";

const initialState = { token: null };
const tokenSelector = state => state.token;

const actions = {
  SET_SPOTIFY_TOKEN: "SET_SPOTIFY_TOKEN",
  setSpotifyToken: token => ({
    type: actions.SET_SPOTIFY_TOKEN,
    token
  }),
  createFetchOptions: (method, bodyContent) => {
    return async (dispatch, getState) => {
      const state = await getState();
      const token = tokenSelector(state);
      const optionalBody = { uris: bodyContent };
      const body = hasBodyContent(bodyContent) ? optionalBody : null;
      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body,
        method
      };
      return options;
    };
  },
  spotifyFetch: (name, url, httpMethod, optional, body) => {
    return async dispatch => {
      const host = "https://api.spotify.com/v1";
      url = host + url;
      const options = await dispatch(
        actions.createFetchOptions(httpMethod, body)
      );
      if (hasOptionalParams(optional)) url += createQueryString(optional);
      try {
        const response = await fetch(url, options);
        const json = response.json();
        return json;
      } catch (err) {
        console.error(`${name}: `, err.message, err);
      }
    };
  }
};

const reducer = (state = initialState, action) => {
  const { type, token } = action;
  switch (type) {
    case actions.SET_SPOTIFY_TOKEN:
      return { ...state, token };
    default:
      return state;
  }
};

const { createFetchOptions, setSpotifyToken, spotifyFetch } = actions;

export { createFetchOptions, reducer, setSpotifyToken, spotifyFetch };
