import { useState } from 'react';

import { Router, BrowserRouter, Route } from 'react-router-dom';
import Tournament from './Components/Tournament/Tournament/Tournament.jsx';
import Placings from './Components/Tournament/Placings/Placings.jsx';

function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Router>
        <Route path='/current-year' element={<Tournament />}/>
      </Router>
      </BrowserRouter> */}
      <Tournament />
      <Placings />
    </>
  );
}

export default App;
