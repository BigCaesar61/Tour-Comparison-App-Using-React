//Task 1: App.jsx (Root Component)


import React, { useState } from "react";
import Gallery from './Gallery';

const App = () => {
  const [currentPage, setCurrentPage] = useState('gallery');

  const navigate = (page) => {
    setCurrentPage(page);
  }


//route structure
  return (
    <div>
      <nav>
        <button onClick={() => navigate('gallery')}>Gallery</button>
      </nav>
      <main>
        {currentPage === 'gallery' && <Gallery />}
      </main>
    </div>
  );
};

export default App;