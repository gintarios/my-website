import React, { Component } from 'react';
import './App.css';

const ContactMe = () => {
    return (
        <div className='section-contactme'>
            <h2>Drop me a message!</h2>

            <div className='contact-form'>
                <div className='contact-name'>
                    <label>Your Name</label>
                    <input type='text' name='name' id='name' placeholder='Your name' required />
                </div>

                <div className='contact-email'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email" required />
                </div>

                <div className='contact-message'>
                    <label>Your message</label>
                    <textarea name="message" placeholder="Your message"></textarea>
                </div>

                <button>
                    <input type="submit" value="Send it" />
                </button>



            </div>

        </div>
    )
}

export default ContactMe;