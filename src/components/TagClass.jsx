import * as React from "react";
import { Component } from "react";

export default class TagClass extends Component {
  constructor(props) {
    super(props);
    // this.state = { clicked: false }
  }

  render() {
    return (
      <span
        className={
          "pc-tag" +
          (this.props.type?.className
            ? " pc-tag--" + this.props.type.className
            : "") +
          (this.props.type?.decoration
            ? " pc-tag--" + this.props.type.decoration
            : "") +
          (this.props.type?.size ? " pc-tag--" + this.props.type.size : "")
        }
      >
        {this.props.icon && (
          <span>
            <i className={"fa " + this.props.icon} />
            &nbsp;
          </span>
        )}
        {this.props.name}
      </span>
    );
  }
}
