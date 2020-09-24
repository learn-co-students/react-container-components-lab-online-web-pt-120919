import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    
       state= {
           searchTerm: '',
           reviews: []
       };

       handleSearch= event => {
           this.setState({searchTerm: event.target.value});
       }

       handleSubmit = event => {
           event.preventDefault();

           fetch(URL.concat(this.state.searchTerm))
           .then(response => response.json())
           .then(data => this.setState({reviews: data.results }));
       };

       render(){
           return(
                <div className='searchable-movie-reviews'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Search: </label>
                        <input
                        type='text'
                        style={{ width: 300}}
                        onChange={this.handleSearch}                    
                        />
                        <button type='submit'> Submit </button>
                    </form>
                    <h2>Your Search Results : </h2>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
           )
       }

  

}