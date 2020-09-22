import React from 'react';

const MovieReviews = (props) => {
    console.log(props)
let reviewArray = props.reviews.map((reviewObj) => <p className="review">{reviewObj.headline} - {reviewObj.display_title} - {reviewObj.byline}</p>)
    return (
        <div key={props.headline} className="review-list">
            {reviewArray}
        </div>
    );
};

export default MovieReviews;