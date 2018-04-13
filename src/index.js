// The index file is where we import react/ reactDOM/ and the built components
// from the app.js file.
// 1: REACT 
// 2: REACT DOM
// 3: IPORT THE COPONENTS FROM App.js
// 4: RENDER COMPONENTS TO ELEMENT IN index.html

// Step1: Import react
import React from 'react';

// Step 2: Iport reactDOM
import ReactDOM from 'react-dom';

// css styles
import './index.css';

// Step 3: imprt components from app.js
import App from './App';

// Step 4: Render to index.html
// **Syntax**     **What to render  **Where to render
ReactDOM.render(<App />, document.getElementById('root'));
