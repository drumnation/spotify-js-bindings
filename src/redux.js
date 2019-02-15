import { hasBodyContent } from "./helpers/conditionals";

const initialState = {
  token: ""
};

export const tokenSelector = state => state.token;

export const SET_SPOTIFY_TOKEN = "SET_SPOTIFY_TOKEN";

export const setSpotifyToken = token => ({
  type: SET_SPOTIFY_TOKEN,
  token
});

export const createFetchOptions = (method, bodyContent) => {
  return async getState => {
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
};

const Reducer = (state = initialState, action) => {
  const { type, token } = action;
  switch (type) {
    case SET_SPOTIFY_TOKEN:
      return { ...state, token };
    default:
      return state;
  }
};

export default Reducer;
