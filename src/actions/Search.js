import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/search";
import bindActionCreators from "../helpers/actions";

const searchForItem = (query, type, optional) => {
  return async dispatch => {
    const mergedOptional = {
      q: query,
      type: encodeURIComponent(type),
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

const search = bindActionCreators({
  searchForItem
});

export default search;
