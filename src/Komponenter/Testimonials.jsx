import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  const updateRating = (id, newRating) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, starRating: newRating } : testimonial
      )
    );
  };

  return (
    <div>
      {testimonials.map(({ id, author, jobRole, starRating, avatarUrl, comment }) => (
        <div key={id} style={{ border: '1px solid #ddd', padding: '1em', margin: '1em 0' }}>
          <img src={avatarUrl} alt={`${author}'s avatar`} width="50" height="50" />
          <h3>{author}</h3>
          <p><em>{jobRole}</em></p>
          <StarRating
            rating={starRating}
            onRatingChange={(newRating) => updateRating(id, newRating)}
          />
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
