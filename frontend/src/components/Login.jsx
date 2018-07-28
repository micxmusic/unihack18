import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Table,
} from "reactstrap";
import login from "../assets/login.png";

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <center>
            <img src={login} alt="login" height="300px" />
          </center>
          <Table>
            <Form>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="foobar@example.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="input password"
                />
              </FormGroup>
              <Button color="primary" size="lg" block>
                Login
              </Button>
            </Form>
          </Table>
        </Container>
      </React.Fragment>
    );
  }
}
