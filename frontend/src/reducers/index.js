import { combineReducers } from "redux";
import notes from "./notes";
import ingredients from "./ingredients";
import recipes from "./recipes";

const ponyApp = combineReducers({
  ingredients,
  recipes,
});

export default ponyApp;
