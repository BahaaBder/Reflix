import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class RentedMovie extends Component {
  constructor() {
    super();
  }
  removeRentedMovie = () => {
    this.props.removeRentedMovie(this.props.movie);
  };
  render() {
    let movie = this.props.movie;
    return (
      <div>
        <div>
          {/* <Link to={`/movies/${movie.id}`}> */}
          <img src={movie.img} />
          {/* </Link> */}
        </div>
        <button onClick={this.removeRentedMovie}>-</button>
      </div>
    );
  }
}
