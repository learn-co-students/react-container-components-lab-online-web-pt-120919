import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();

        this.state={
            reviews:[],
            searchTerm:''
        }
    }
    
    handleSearchChange = e =>{
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(serchData => this.setState({reviews: serchData.reviews}))
    }
    
    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearchChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews ={this.state.reviews}/>
            </div>
        )
    }
}