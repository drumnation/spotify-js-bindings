/* eslint-disable no-param-reassign */
import fetch from "isomorphic-fetch";

import { types, createFetchOptions } from "../redux";

import { hasOptionalParams } from "./conditionals";
import createQueryString from "./query";

const spotifyApiRequest = async (name, httpMethod, url, optional, body) => {
  return async dispatch => {
    const options = dispatch(createFetchOptions(httpMethod, body));
    if (hasOptionalParams(optional)) {
      url += createQueryString(optional);
    }
    try {
      const response = await fetch(url, options);
      const json = response.json();
      dispatch({ type: types.SPOTIFY_API_REQUEST, name, response, json });
      return json;
    } catch (err) {
      console.error(`${name}: `, err.message, err);
    }
  };
};

export default spotifyApiRequest;
