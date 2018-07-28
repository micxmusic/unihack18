import React from "react";
import { Jumbotron } from "reactstrap";

const NotFound = () => {
  return (
    <React.Fragment>
      <Jumbotron>
        <h1 className="display-3">404 Not Found</h1>
        <p className="lead">The page you're looking for does not exist.</p>
        <p className="lead">
          {/* <BackButton color="primary">Go back</BackButton> */}
        </p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default NotFound;
