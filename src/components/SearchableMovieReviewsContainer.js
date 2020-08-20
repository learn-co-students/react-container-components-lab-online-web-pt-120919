import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: [],
    }
  }

  fetchReviews() {
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(response => this.setState({reviews: response.results}))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchReviews();
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    return (
      <form className="searchable-movie-reviews" onSubmit={this.handleSubmit}>
        <MovieReviews reviews={this.state.reviews} />
        <input type="text" name="search-term" onChange={this.handleChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}
