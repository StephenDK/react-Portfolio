/* In this file you import all of the components and images
and css styles into an app function which we will export to
 be rendered on the main screen. */

// Iport react
import React from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/Navbar';
import Panel from './components/Panel';



/* This is the function called app that will export 
the components to be rendered */

const App = () => (
  <Router>
    <div>
      <Navbar />
      <AboutMe />
      {/* <Panel /> */}
    </div>
  </Router>
);


// export app function
export default App;