import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends PureComponent {
    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(jsonObj => 
            this.setState({
                reviews: jsonObj.results
            })
        )
        .catch(errors => console.log(errors))
    }
   
    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Lastest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;