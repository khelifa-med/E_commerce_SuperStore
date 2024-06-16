import React, { useState } from 'react';
import './heroContact.css';

export default function HeroContact() {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <div className="hero-contact">
            <div className="hero-content">
                <h1>Welcome to Our Website</h1>
                <p>We are glad to have you here. Please read the following introduction to know more about us.</p>
                <p>At our company, we strive to deliver the best service to our customers. Our team is dedicated to ensuring that you have the best experience possible. If you have any questions or need further information, feel free to get in touch with us.</p>
                {!showForm && <button onClick={handleShowForm} className="intro-button">Contact Us</button>}
            </div>
            {showForm && (
                <div className="contact-form ">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            )}
        </div>
    );
}