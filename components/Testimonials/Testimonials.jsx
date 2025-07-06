import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Sarah',
    role: 'Student',
    text: 'I received my scholarship faster than ever thanks to the streamlined online system.',
    image: 'https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=', // Replace with the actual image URL
    rating: 5,
  },
  {
    name: 'Mike',
    role: 'Student',
    text: 'The digital submission process was a game-changer for me. It saved so much time and effort.',
    image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=', // Replace with the actual image URL
    rating: 5,
  },
  {
    name: 'Noah',
    role: 'Student',
    text: 'The application process was simple, and I felt supported throughout.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg', // Replace with the actual image URL
    rating: 5,
  },
  {
    name: 'Sam',
    role: 'Student',
    text: 'A smooth, well-organized portal that made applying for scholarships a straightforward task.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png', // Replace with the actual image URL
    rating: 5,
  },
  {
    name: 'Nick',
    role: 'Student',
    text: 'Thanks to this platform, I felt confident in my scholarship application process.',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', // Replace with the actual image URL
    rating: 5,
  },
 
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">TESTIMONIALS</h2>
      <div className="testimonial-card">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="testimonial-content">
          <div className="image-container">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="testimonial-image"
            />
            <div className="quote-icon">
              <span>&ldquo;</span>
            </div>
          </div>
          <p className="testimonial-text">{currentTestimonial.text}</p>
          <div className="testimonial-rating">
            {'★'.repeat(currentTestimonial.rating)}
            {'☆'.repeat(5 - currentTestimonial.rating)}
          </div>
          <h4 className="testimonial-name">{currentTestimonial.name}</h4>
          <p className="testimonial-role">{currentTestimonial.role}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
