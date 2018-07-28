import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import PonyNote from "./components/PonyNote";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { Provider } from "react-redux";
import ponyApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Topbar from "./components/Topbar";
import Contributions from "./components/Contributions";
import IngredientSearchBox from "./components/IngredientSearchBox";
let store = createStore(ponyApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Topbar />
            <Switch>
              <Route exact path="/contributions" component={Contributions} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={IngredientSearchBox} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
