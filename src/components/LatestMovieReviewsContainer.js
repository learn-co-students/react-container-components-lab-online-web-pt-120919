import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "brnYM2seB1Q5VeeBtj665iZAmAynDYwy";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Lateat Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
