import React, { Component } from "react";
import { Media } from "reactstrap";

class Contributions extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>My Recipes</h1>
        <Media>
          <Media left href="#">
            <Media
              object
              data-src="holder.js/64x64"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body>
            <Media heading>Recipe Name</Media>
            Recipe description Lorem ipsum blah blah blah
          </Media>
        </Media>
      </React.Fragment>
    );
  }
}

export default Contributions;
