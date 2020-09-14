import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSearchInput = (event) =>
    this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL)
      .then(resp => resp.json())
      .then(searchReviews => this.setState({ reviews: searchReviews.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleSearchInput}
          />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
