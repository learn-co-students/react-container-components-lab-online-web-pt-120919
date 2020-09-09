import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
              + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

  state = {
      reviews: [],
      searchTerm: ""
  }

  handleSubmit = (e) => {
      e.preventDefault()
      fetch(URL + `${this.state.searchTerm}`)
          .then(res => res.json())
          .then(data => this.setState({ reviews: data.results }))
  }

  handleSearchInputChange = event =>
      this.setState({ searchTerm: event.target.value });

  render() {
      return (
          <div className="searchable-movie-reviews">
              <form onSubmit={this.handleSubmit}>
                  <input type="test" value={this.state.searchTerm} name="searchTerm" onChange={this.handleSearchInputChange}/>
                  <input type="submit" />
              </form>    
              <MovieReviews reviews={this.state.reviews} />
          </div>
      )    
  }
}