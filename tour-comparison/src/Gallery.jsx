//Task 2: Gallery.jsx (Tour List Component)


import React, { useState, useEffect } from 'react';

 const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const response = await fetch(
              "https://api.allorigins.win/get?url=https://course-api.com/react-tours-project"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch tours"); //error handling for failed responses
            }
    
            const data = await response.json();
            const toursData = JSON.parse(data.contents); 
    
            setTours(toursData); //update state with the fetched tour data
            setLoading(false); 
          } catch (err) {
            setError(err.message); 
            setLoading(false); //ensure loading is turned off even after failure
          }
        };
    
        fetchTours(); //trigger the async fetch function
      }, []); //dependency array
    
      const removeTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); //remove the tour with the specified ID
      };
    
      if (loading) return <p>Loading...</p>; //show a loading message while fetching
      if (error) return <p>Error: {error}</p>; //error message if fetching fails
    
      return (
        <div className="gallery">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} removeTour={removeTour} /> 
          ))}
        </div>
      );
    };
    
    const TourCard = ({ tour, removeTour }) => {
      const [showMore, setShowMore] = useState(false); 
    
      return (
        <div className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <p className="tour-price">${tour.price}</p>
          <p className="tour-description">
            {showMore ? tour.info : `${tour.info.substring(0, 100)}...`} {/* Show truncated or full description */}
            <button
              className="read-more"
              onClick={() => setShowMore((prev) => !prev)} 
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button
            className="not-interested"
            onClick={() => removeTour(tour.id)} // Call removeTour with the tour ID
          >
            Not Interested
          </button>
        </div>
      );
    };
  
  export default Gallery;
  