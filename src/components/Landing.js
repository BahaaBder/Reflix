import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Landing extends Component {
  render() {
    let users = this.props.state.users;
    return (
      <div>
        {users.map((u) => {
          return (
            <Link to="/catalog">
              <span className="user-box">{u.name}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}
