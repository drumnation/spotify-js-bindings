/* eslint-disable no-param-reassign */
import fetch from "isomorphic-fetch";

import { createFetchOptions } from "../redux";

import { hasOptionalParams } from "./conditionals";
import createQueryString from "./query";

const spotifyFetch = (name, url, httpMethod, optional, body) => {
  return async dispatch => {
    const host = "https://api.spotify.com/v1";
    url = host + url;

    const options = await dispatch(createFetchOptions(httpMethod, body));

    if (hasOptionalParams(optional)) {
      url += createQueryString(optional);
    }

    try {
      const response = await fetch(url, options);
      const json = response.json();
      return json;
    } catch (err) {
      console.error(`${name}: `, err.message, err);
    }
  };
};

export default spotifyFetch;
