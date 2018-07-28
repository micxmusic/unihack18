import { combineReducers } from "redux";
import notes from "./notes";
import ingredients from "./ingredients";

const ponyApp = combineReducers({
  ingredients,
});

export default ponyApp;
