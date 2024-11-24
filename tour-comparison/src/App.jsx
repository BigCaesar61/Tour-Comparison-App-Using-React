//Task 1: App.jsx (Root Component)


import React, { createContext, useState } from "react";
import Gallery from './Gallery';

export const AppContext = createContext(); //allows for global share state

const App = () => {
  const [globalState, setGlobalState] = useState("default value");

//route structure
  return (
 // Provide the global state and its setter to all components via context
 <AppContext.Provider value={{ globalState, setGlobalState }}>
 <div className="App">
   {/* Includes the gallery component*/}
   <Gallery />
 </div>
</AppContext.Provider>
);
};

export default App;