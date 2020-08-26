import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {

    state = { reviews: [] }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {console.log(data.results), this.setState({ reviews: data.results})})
    }

    renderReviews = () => {
        this.state.reviews.map(review => <MovieReviews byline={review.byline}/>)
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                {this.renderReviews}
            </div>
        )    
    }
}
