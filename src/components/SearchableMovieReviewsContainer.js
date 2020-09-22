import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends PureComponent {
    state={
        reviews: [],
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(URL.concat(`&query=${this.state.searchTerm}`))
        fetch(URL.concat(`&query=${this.state.searchTerm}`))
        .then(res => res.json())
        .then(json => this.setState({reviews: json.results})) 
    }
   
    render() {
        return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <input id="search-input" type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                        <button type="submit">Submit</button>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            
        );
    }
}

export default SearchableMovieReviewsContainer;