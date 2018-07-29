import React, { Component } from "react";
import { Form, Table, Media, Container, Row, Col, Button } from "reactstrap";
import login from "../assets/login.png";

class ShoppingList extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mw-40">
          <Col>
            <Row>
              <Media left href="#" />
            </Row>
            <Table />
            <h4>My Shopping List</h4>
            <Table>
              <tr>
                <td>Chicken</td>
              </tr>
              <tr>
                <td>More Chicken</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Button className="m-0 p-0" color="link">
                    Edit
                  </Button>
                </td>
              </tr>
            </Table>
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}

export default ShoppingList;
