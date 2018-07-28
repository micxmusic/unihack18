//actions

// actions
export const fetchRecipes = ingredients => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let apiCall = "/api/RecipeIngredient/";
    let recipeApiCall = "/api/Recipe/";
    // const availableIngredients = [];
    // if (ingredients.length !== 0) {
    //   apiCall += "?ingredient__in=";
    //   apiCall += ingredients.join(",");
    // }

    // fetch(apiCall, { headers })
    //   .then(res => res.json())
    //   .then(data => {
    //     for (let i = 0; i < data.length; i++) {
    //       if (!availableIngredients.includes(data[i].belongs_to)) {
    //         console.log(data[i].belongs_to);
    //         availableIngredients.push(data[i].belongs_to);
    //       }
    //     }
    //   });
    // console.log(availableIngredients);
    return fetch(recipeApiCall, { headers })
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
          return dispatch({ type: "FETCH_RECIPES", recipes: res.data });
        } else if (res.status === 401 || res.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};
