import React from 'react'

const Review = (review) => {
    return(
        <div key={review.headline} className="review">
            <h3>{review.display_title}</h3>
            <p>Rating: {review.critics_pick}</p>
            <p>{review.summary_short}</p>
            <hr></hr>
        </div>
    )
}

const MovieReviews = ({ reviews }) =>{
    return (
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}

export default MovieReviews