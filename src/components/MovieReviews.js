// Code MovieReviews Here
import React from 'react';
const Review = ({
    headline,
    byline,
    summary_short
}) => {
    return (

        <div
            key={headline}
            className="review"
        >
            <h2>{headline}</h2>
            <h4>{byline}</h4>
            <p>{summary_short}</p>

        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews

