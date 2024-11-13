import React from 'react';

const StarRating = ({ rating, maxStars = 5, onRatingChange }) => {
  const handleStarClick = (index) => {
    if (onRatingChange) onRatingChange(index + 1);
  };

  return (
    <div>
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer' }}
        >
          {index < rating ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
