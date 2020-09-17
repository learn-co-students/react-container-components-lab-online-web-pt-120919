import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const BASE_URL = URL + `&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    }
  };

  handlePhrase = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  }

  render() {
    return (
      <div className="searchable=movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Phrase:</label>
          <input type="text" onChange={event => this.handlePhrase(event)} value={this.state.searchTerm} />
          <input type="submit" />
        </form>

        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
