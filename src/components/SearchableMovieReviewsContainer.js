import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                reviews: result.results
            })
        })
    }

    handleTyping = (e) =>{
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        return (
            <ul className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleTyping}></input>
                    <input type="submit"></input>
                </form>
                <h1>Searchable: </h1>
                <MovieReviews reviews={this.state.reviews} />
            </ul>
        );
    }
}

export default SearchableMovieReviewsContainer;