const initialState = {
  token: ""
};

export const tokenSelector = state => state.token;

export const types = {
  SET_AUTHORIZATION_TOKEN: "SET_AUTHORIZATION_TOKEN",
  CREATE_FETCH_OPTIONS: "CREATE_FETCH_OPTIONS",
  SPOTIFY_API_REQUEST: "SPOTIFY_API_REQUEST"
};

export const setToken = token => ({
  type: types.SET_AUTHORIZATION_TOKEN,
  token
});

export const createFetchOptions = (method, bodyContent) => {
  return async (dispatch, getState) => {
    const state = await getState();
    const token = tokenSelector(state);
    const optionalBody = { uris: bodyContent };
    const body = bodyContent !== undefined ? optionalBody : null;
    dispatch({ type: types.CREATE_FETCH_OPTIONS, token, body });
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
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTHORIZATION_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case types.CREATE_FETCH_OPTIONS:
    case types.SPOTIFY_API_REQUEST:
      return { ...state };
    default:
      return state;
  }
};

export default Reducer;
