import React from 'react'

const Reviews = ({display_title, byline, link, summary_short}) => {
    return (

        <div key={display_title} className="review">
            <header>
            <a className="review-link" href={link.url} >
                {display_title}
            </a>
            <br/>
            <span className="author">{byline}</span>
            </header>
            <p>{summary_short}</p>
        </div>
    );
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Reviews)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews