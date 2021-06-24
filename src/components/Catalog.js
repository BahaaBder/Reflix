import React, { Component } from "react";

import Movie from "./Movie";
import RentedMovie from "./RentedMovie";
export default class Catalog extends Component {
  constructor() {
    super();
  }
  render() {
    let catalog = this.props.state.movies;
    let rented;
    if (this.props.state.rentedMovies.length >= 0) {
      rented = (
        <div>
          <div>Rented:</div>
          <div className="rented-movies">
            {this.props.state.rentedMovies.map((rm) => {
              return (
                <span className="catalog-item">
                  <RentedMovie
                    movie={rm}
                    removeRentedMovie={this.props.removeRentedMovie}
                  />
                </span>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <span className="Budget">Budget: 200 $</span>
        {rented}
        <div className="catalog-movies">
          <div>Catalog:</div>
          {catalog.map((m) => {
            return (
              <span className="catalog-item">
                <Movie
                  movie={m}
                  state={this.props.state}
                  addRentedMovie={this.props.addRentedMovie}
                  removeRentedMovie={this.props.removeRentedMovie}
                />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
