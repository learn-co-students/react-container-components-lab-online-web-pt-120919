import React from "react"

const MovieReviews = ({byline}) => {
    return (
        <div className="review-list">
            <div>{byline}</div>
        </div>
    )
}

export default MovieReviews