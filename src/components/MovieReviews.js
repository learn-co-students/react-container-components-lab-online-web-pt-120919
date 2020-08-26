import React from "react"

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(review => <ul className="review"><li>{review.byline}</li></ul>)}
        </div>
    )
}

export default MovieReviews