// Code MovieReviews Here
import React from 'react';
 
const MovieReviews = ({reviews}) => {
   return (
       <div className = 'review-list'>
           
               {reviews.map((review, index) => <li className = 'review' key={index}> {review.display_title} - {review.summary_short}</li>)}
          
       </div>
   );
}

export default MovieReviews;