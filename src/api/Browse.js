import fetch from "isomorphic-fetch";
import { hasOptionalParams } from "../helpers/conditionals";
import { host, createFetchOptions } from "../config";
import createQueryString from "../helpers/query";

const options = createFetchOptions("GET");

// Get All Categories
export const getAllCategories = async params => {
  let url = `${host}/browse/categories`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getAllCategories", err);
  }
};

// Get a Single Browse Category
export const getASingleBrowseCategory = async (categoryId, params) => {
  let url = `${host}/browse/categories/${categoryId}`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getASingleBrowseCategory", err);
  }
};

// Get a Category's Playlists
export const getACategorysPlaylists = async (categoryId, params) => {
  let url = `${host}/browse/categories/${categoryId}/playlists`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getACategorysPlaylists", err);
  }
};

// Get Recommendations Based on Seeds
export const getReccomendationsBasedOnSeeds = async params => {
  let url = `${host}/recommendations`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getReccomendationsBasedOnSeeds", err);
  }
};

// Get Recommendation Genres
export const getReccomendationGenres = async () => {
  const url = `${host}/recommendations/available-genre-seeds`;
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getReccomendationGenres", err);
  }
};

// Get All New Releases
export const getAllNewReleases = async params => {
  let url = `${host}/browse/new-releases`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getAllNewReleases", err);
  }
};

// Get All Featured Playlists
export const getAllFeaturedPlaylists = async params => {
  let url = `${host}/browse/featured-playlists`;
  if (hasOptionalParams(params)) {
    url = createQueryString(params);
  }
  try {
    const response = await fetch(url, options);
    const json = response.json();
    return json;
  } catch (err) {
    console.log("getAllNewReleases", err);
  }
};
