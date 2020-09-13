import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const QUERY_URL = URL + '&query='

class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(QUERY_URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(movieReviews => this.setState({
            reviews: movieReviews.results
        }))
    }

    handleSearch = event => this.setState({ searchTerm: event.target.value })

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input 
                        type="text"
                        onChange={this.handleSearch}
                    />
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer