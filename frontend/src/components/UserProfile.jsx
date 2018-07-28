import React, { Component } from "react";
import { Media } from "reactstrap";

class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="User Profile pic" />
          </Media>
          <Media body>
            <Media heading>Username</Media>
            Change password Equiptment owned Dietry Restrictions
          </Media>
        </Media>
      </React.Fragment>
    );
  }
}

export default UserProfile;
