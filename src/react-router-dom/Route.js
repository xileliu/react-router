import React from "react";
import { Consumer } from "./context";
import pathToRegexp from "path-to-regexp";
class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {value => {
          let {
            location: { pathname }
          } = value;
          let { path, component: Component, exact } = this.props;
          let keys = [];
          let regexp = pathToRegexp(path, keys, { end: exact });
          let resulet = pathname.mach(regexp);
          if (resulet) {
            return <Component />;
          } else {
            return null;
          }
        }}
      </Consumer>
    );
  }
}

export default Route;
