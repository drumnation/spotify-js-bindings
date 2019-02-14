import spotifyFetch from "../helpers/fetch";
import urls, { httpMethods } from "./urls/search";

export const searchForItem = (query, type, optional) => {
  return async dispatch => {
    const mergedOptional = {
      q: query,
      type,
      ...optional
    };
    return dispatch(
      spotifyFetch(
        "searchForItem",
        urls.searchForItem,
        httpMethods.searchForItem,
        mergedOptional,
        null
      )
    );
  };
};
