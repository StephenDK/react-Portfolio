//  Import  react
import React from 'react';
// import styles
import './linkStyles.css';

import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedIn from '../../assets/linkedIn.png';

const Panel = () => (
    <section className='connect-with-me-area'>
        <div className='connect-with-me-content panel panel-default'>
            <h3 className='panel-title'>Connect with me</h3>
                <hr></hr>
                <div className='panel-body'>
                    <a href='https://github.com/StephenDK'><img className='social-media-link' src={github} alt='Me'></img></a>
                    <a href='https://www.linkedin.com/in/webdevklein/'><img className='social-media-link' src={linkedIn} alt='Me'></img></a>
                    <a href='https://twitter.com/WebDevKlein?lang=en'><img className='social-media-link' src={twitter} alt='Me'></img></a>
                    {/* https://stackoverflow.com/users/8606564/webdevklein */}
                </div>
        </div>
    </section>
);

// export 
export default Panel;