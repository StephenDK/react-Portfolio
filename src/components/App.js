/* In this file you import all of the components and images
and css styles into an app function which we will export to
 be rendered on the main screen. */

// Iport react
import React, { Component } from 'react';
// import react router
import { BrowserRouter, Route } from 'react-router-dom';

// Import components
import AboutMe from './AboutMe';
import Navbar from './Navbar'
import Panel from './Panel';
import Contact from './Contact';
import Footer from '../components/Footer';



/* This is the function called app that will export 
the components to be rendered */

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};


// export app function
export default App;