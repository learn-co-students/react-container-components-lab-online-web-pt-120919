import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }
  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  fetchSearch = event => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`).then(resp =>
      resp.json().then(reviews => this.setState({ reviews: reviews.results }))
    );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form
          onSubmit={event => {
            this.fetchSearch(event);
          }}
        >
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.search}
          />
          <input type="submit" />
        </form>
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
