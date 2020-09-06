import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
 
class SearchableMovieReviewsContainer extends Component {
   constructor (props) {
       super(props);
       this.state = {
           reviews: [],
           searchTerm: ''
       }
   }
 
   handleSubmit(e) {
       e.preventDefault();
       fetch(URL + `&query=${this.state.searchTerm}`)
           .then(response => response.json())
           .then(reviewsReturn => this.setState({ reviews: reviewsReturn.results }))
   }
 
   render() {
       return (
        <div className = 'searchable-movie-reviews'>
           
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})} />
                <input type="submit"/>
            </form>

            <MovieReviews reviews={this.state.reviews} />
        </div>
       )
   }
}
 
export default SearchableMovieReviewsContainer;