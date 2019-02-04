export const host = "https://api.spotify.com/v1";

export const token =
  "BQAblcg2kNDze5JyvY68JRnGZFT9ITdfwJkFI5K1W2lR0SsS8EbBqDNb3bw558ZXRk2nK7-YYZIUn5zt-iUpAG25iz9Ip0UT1EVlqH46XFyop10YnXAl2eK7eqXq8YuSJWy-2XUTkYIT4QCntkJ_FOdrkhOJK3yoT7OrtAHlU8bJ3t9w-p-elKzMVAkBn_PwBdszWdFeszDaUnDddWy5wUi4kH3J3BJTt1NSke0eI37qaMKhnDZhGgxD3Tn6pNOg8oaeJzBOirRdhlGwng";

// creators

export const createFetchOptions = method => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    method
  };
};
