import { spotifyFetch } from "../redux";
import { urls, httpMethods } from "../config/personalization";
import bindActionCreators from "../helpers/actions";

const searchForItem = (query, type, optional) => {
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

const search = bindActionCreators({
  searchForItem
});

export default search;
