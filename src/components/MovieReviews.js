import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <p className="review">
          {review.headline} - <strong>{review.byline}</strong>
        </p>
      ))}
    </div>
  );
};

export default MovieReviews;
