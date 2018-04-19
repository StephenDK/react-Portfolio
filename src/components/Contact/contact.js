import React, { Component } from 'react';
import './formstyle.css';

class Contact extends Component {

    render() {
        return (
            <div className='form-container card'>
            <h3 className="card-header">Send me a message</h3>
                <form action="https://formspree.io/stephendklein08@gmail.com" method="POST" id="contact-form">
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <br />
                        <input type="text" name="name" />
                    </div>
                    
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <br />
                        <input type="email" name="_replyto" />
                    </div>
                    
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <br />
                        <textarea name="message"></textarea>
                    </div>
                    <div>
                        <input className="form-group" type="submit" value="Send" />
                    </div>
                </form>
                <p>Or, just email me directly at <a href="mailto:stephendklein08@gmail.com" target="_blank"><strong>stephendklein08@gmail.com</strong></a></p>
            </div>
        )
    }
}

export default Contact;