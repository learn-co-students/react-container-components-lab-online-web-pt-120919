import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      reviews: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + `${this.state.query}&api-key=brnYM2seB1Q5VeeBtj665iZAmAynDYwy`)
      .then(resp => resp.json())
      .then(reviewList => this.setState({ reviews: reviewList.results }));
  };

  onChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.onChange}
          />
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
