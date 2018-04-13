// This file will hold the jumbotron component 

// Step 1: always import react to uses react tools
import React from 'react';
import Foto from '../../Me.JPG';
import Panel from '../Panel'

/* When creating a component consider using
either a const/ var/ let variable decleration.
*/
// The difference between the 3 is:
/* 
const:  Means the identifier cannot be reassigned.
*Note* You can valeuse in a const object but cannot change 
the object to an array.
*/
/* 
let: is a signal that the variable can be reassigned.
*EXAMPLE* counter in a loop, or value swap in an algorithm
*/
/* 
var: Is now the weakest signal available but still can be 
or cannot be reassigned 
*/

// Note arrow function in ES6
// *SYNTAX* => (param1, param2, …, paramN) => { statements }
const Aboutme = () => (
    <div className='wrap'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <article className='about-me'>
                        <h2>About Me</h2>
                        <hr></hr>
                        <img className='picture' src={Foto} alt='Me'></img>
                        <p>My name is Stephen Klein and I’m a full stack web developer. I’m passionate for computers and it has become a lifestyle that
                         drives me to continually explore my potential. My favorite coding languages include HTML, CSS, JavaScript, JQuery, Node.js, Python,
                         MonogoDB, React, and Express. Some of my hobbies are developing websites, building computers, playing guitar, video games,
                         snowboarding, motorcycles, surfing, archery, basketball.
                         </p>
                    </article>
                </div>
                <Panel />
            </div>
        </div>
    </div>
);

/* After your finished writing the component export it so
we can use it in other files.
*/
// There are two types of exports. name & default
/* name: Named exports are useful to export several values */
/* default: this type of export can be imported with any name */
export default Aboutme;


// Images should go into the public folder 
// this is basically the front end folder