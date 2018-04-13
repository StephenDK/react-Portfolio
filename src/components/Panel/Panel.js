//  Import  react
import React from 'react';
// import styles
import './linkStyles.css';

const Panel = () => (
    <section className='connect-with-me-area'>
        <div className='connect-with-me-content panel panel-default'>
            <h3 className='panel-title'>Connect with me</h3>
                <div className='panel-body'>
                    <a href='https://github.com/StephenDK'>GitHub</a>
                    <a href='https://www.linkedin.com/in/webdevklein/'>linkedIn</a>
                    <a href='https://stackoverflow.com/users/8606564/webdevklein'>tackOverFlow</a>
                </div>
        </div>
    </section>
);

// export 
export default Panel;