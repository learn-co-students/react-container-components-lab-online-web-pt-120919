import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then((movieData) => {
            this.setState({
                reviews: movieData.results
            })
        })
    }
    
    render() {
        return (
            <ul className="latest-movie-reviews">
                <h1>Latest Movies</h1>
                <MovieReviews reviews={this.state.reviews} />
            </ul>
        );
    }
}

export default LatestMovieReviewsContainer;