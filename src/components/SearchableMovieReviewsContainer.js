import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    fetchData = (searchTerm) => {
        fetch(URL + `&query=${searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState({ reviews: data }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <input type="test" value={this.state.searchTerm} name="searchTerm" onChange={e => this.setState({searchTerm: e.target.value})}/>
                <input type="submit" onSubmit={this.fetchData(this.state.searchTerm)}/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )    
    }
}
