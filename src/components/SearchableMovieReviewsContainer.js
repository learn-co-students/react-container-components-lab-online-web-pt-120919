import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=brnYM2seB1Q5VeeBtj665iZAmAynDYwy&query=";

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + `${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(reviewList => this.setState({ reviews: reviewList.results }));
  };

  onChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
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
