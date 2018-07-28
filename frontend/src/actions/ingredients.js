// actions
export const fetchIngredients = search => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let apiCall = "/api/ValidIngredient/";

    if (search !== "") {
      apiCall += "?name__icontains=" + search;
    }

    return fetch(apiCall, { headers })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          return dispatch({ type: "FETCH_INGREDIENTS", names: res.data });
        } else if (res.status === 401 || res.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};
