import React, { Component } from "react";

export default class MovieDetail extends Component {
  render() {
    let movieId = this.props.match.params.id;
    let movieInfo = this.props.state.movies.filter((m) => m.id == movieId)[0];
    console.log(movieInfo);
    return (
      <div className="movie-info">
        <div>
          {movieInfo.title} ({movieInfo.year})
        </div>
        <div>
          <img src={movieInfo.img} />
        </div>
        <div>
          <p>{movieInfo.descrShort}</p>
        </div>
      </div>
    );
  }
}
