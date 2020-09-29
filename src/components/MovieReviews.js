// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return (
    <ul className="review-list">
      {props.reviews.map( r => 
        <li className="review">
          <p>Title: {r.display_title}</p>
          <p>Summary: {r.summary_short}</p>
        </li>
      )}
    </ul>
    )
}

export default MovieReviews;