import React, { Component } from "react";
import { Media, Container, Row, Col, Button } from "reactstrap";

class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="User Profile pic" />
          </Media>
          <Media body>
            <Container>
              <Row>
                <Media heading>Username: Unihack18</Media>
              </Row>
              <Row>
                <Media heading>Password: XXXXXXXX</Media>
                <Button color="link">Change password</Button>
              </Row>
              <Row>Equiptment owned:</Row>
              <Row>Stove</Row>
              <Row>Microwave</Row>
              <Row>Dietry Restrictions:</Row>
              <Row>None</Row>
            </Container>
          </Media>
        </Media>
      </React.Fragment>
    );
  }
}

export default UserProfile;
