import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Catalog extends Component {
  render() {
    let catalog = this.props.state.movies;
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <span className="Budget">Budget: 200 $</span>
        <div>Catalog:</div>
        {catalog.map((m) => {
          return (
            <span className="catalog-item">
              <Link to={`/movies/${m.id}`}>
                <img src={m.img} />
              </Link>
              <button>Add Movie</button>
            </span>
          );
        })}
      </div>
    );
  }
}
