import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
} from "reactstrap";
import Search from "./Search";
import logo from "../assets/logo.png";

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" className="fixed-top">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" height="60vh" />
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User Icon
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>My Recipes</DropdownItem>
                  <DropdownItem>My Shopping List</DropdownItem>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
