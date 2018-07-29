import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/css/custom.css";
import "./styles/scss/custom.scss";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
