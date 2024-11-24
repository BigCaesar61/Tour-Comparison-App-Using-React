//Task 1: App.jsx (Root Component)


import React from "react";
import Gallery from './Gallery';

const App = () => {
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