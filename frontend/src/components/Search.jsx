import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <React.Fragment>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Search
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>Insert search box here</CardBody>
          </Card>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Search;
