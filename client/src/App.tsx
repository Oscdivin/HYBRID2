import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './Router/mainRouter';
function App() {
  return (
    <div>
     {/* <RouterProvider router ={mainRouter}/> */}
    <RouterProvider router ={mainRouter}/>
    </div>
  );
}

export default App;
