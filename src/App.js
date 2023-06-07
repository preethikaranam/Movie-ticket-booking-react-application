import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './screens/Movies';
import Summary from './screens/Summary';
import Forms from './compinents/Forms';

const App = ()=> {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Movies/>}/>
          <Route path="/summary/:id" element={<Summary/>} />
          <Route path="/summary/booking/:id" element={<Forms/>} />


      </Routes>
    </Router>
  );
};

export default App;