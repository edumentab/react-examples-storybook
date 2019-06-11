import propTypes from "prop-types";
import React from "react";

export const user = propTypes.shape({
  name: propTypes.string,
  loggedIn: propTypes.bool
});

export class UserContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: props.user };
  }
  getChildContext() {
    return { user: this.state.user };
  }
  render() {
    return this.props.children;
  }
}

UserContext.childContextTypes = {
  user: user
};
