import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))

    }
    
    render(){
        return(
            <div className="searchable-movie-reviews">
                <label>Search Movie Reviews</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
