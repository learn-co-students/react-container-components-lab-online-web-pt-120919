import React from "react";

const Review = ({ headline, link, byline, summary_short }) => {
  return (
    <div key={headline} className="review">
      <h1>{headline}</h1>
      <a href={link.url}>{byline}</a>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

export default MovieReviews;
