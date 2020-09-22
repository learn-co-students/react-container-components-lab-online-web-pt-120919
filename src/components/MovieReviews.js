// Code MovieReviews Here
import React from 'react';

const Review = ({display_title}) => {
    return (
        <div className="review" key={display_title}>
            <h3>{display_title}</h3>
        </div>
    );
};


const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            { reviews.map(Review) }
        </div>
    );
};

export default MovieReviews; 