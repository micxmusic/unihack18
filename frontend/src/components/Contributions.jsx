import React, { Component } from "react";
import { Media, Container } from "reactstrap";
import login from "../assets/login.png";

class Contributions extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>My Recipes</h1>
          <Media>
            <Media left href="#">
              <Media img src={login} width="200vh" alt="recipe placeholder" />
            </Media>
            <Media body>
              <Media heading>Recipe 1</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
          <Media className="mt-1">
            <Media left href="#">
              <Media img src={login} width="200vh" alt="recipe placeholder" />
            </Media>
            <Media body>
              <Media heading>Recipe 2</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
          <Media className="mt-1">
            <Media left href="#">
              <Media img src={login} width="200vh" alt="recipe placeholder" />
            </Media>
            <Media body>
              <Media heading>Recipe 3</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contributions;
