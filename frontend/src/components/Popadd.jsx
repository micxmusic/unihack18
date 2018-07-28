import React from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button,
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Add More
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverBody>
            <form>
              <input
                value={this.state.text}
                placeholder="Enter new ingredient!"
                onChange={e => this.setState({ text: e.target.value })}
                required
              />
              <input
                value={this.state.text}
                placeholder="Enter amount"
                onChange={e => this.setState({ text: e.target.value })}
                required
              />
              <Button color="primary" type="submit">
                Save
              </Button>
            </form>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
