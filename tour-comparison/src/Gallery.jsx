//Task 2: Gallery.jsx (Tour List Component)


import React, { useState, useEffect } from 'react';

 const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchTours = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://api.allorigins.win/get?url=course-api.com/react-tours-project'); //pulls api
          const data = await response.json();
          setTours(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
  
      fetchTours();
    }, []);
  
    const removeTour = (id) => {
      setTours(tours.filter((tour) => tour.id !== id));
    };
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error fetching tours.</p>;
    }
  
    return (
      <div className="gallery">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.price}</p>
            <p>{tour.description.substring(0, 100)}...</p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;
  