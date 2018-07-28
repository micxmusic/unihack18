import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
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
            <FormGroup>
              <Label for="exampleSelectMulti">
                Select your dietary restrictions
              </Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Pescetarian</option>
                <option>Halal</option>
                <option>None</option>
              </Input>{" "}
              <Button color="primary" size="lg" block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}
