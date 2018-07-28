import React, { Component } from "react";
import { Form, Table, Media, Container, Row, Col, Button } from "reactstrap";

class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mw-40">
          <Col>
            <Row>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="User Profile pic"
                />
              </Media>
            </Row>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <b>Username</b>
                  </td>
                  <td>Unihack18</td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <b>Password</b>
                  </td>
                  <td>
                    <Form>*********</Form>
                  </td>
                  <td>
                    <Button className="m-0 p-0" color="link">
                      Change password
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4>Equipment Owned</h4>
            <Table>
              <tbody>
                <tr>
                  <td>
                    Stove <br /> Microwave
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4>Dietary Restrctions</h4>
            <Table>
              <tr>
                <td>None</td>
              </tr>
            </Table>
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}

export default UserProfile;
