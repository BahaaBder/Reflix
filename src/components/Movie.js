import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Movie extends Component {
  constructor() {
    super();
  }
  addMovieToRented = () => {
    this.props.addRentedMovie(this.props.movie);
  };
  removeRentedMovie = () => {
    this.props.removeRentedMovie(this.props.movie);
  };
  render() {
    let movie = this.props.movie;
    let buttonOption;
    if (
      this.props.state.rentedMovies.filter((item) => item == movie).length >= 1
    ) {
      buttonOption = <button onClick={this.removeRentedMovie}>-</button>;
    } else {
      buttonOption = <button onClick={this.addMovieToRented}>+</button>;
    }
    return (
      <div>
        <div>
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.img} />
          </Link>
        </div>
        {buttonOption}
      </div>
    );
  }
}
