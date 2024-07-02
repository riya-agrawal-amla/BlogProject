import React, { useState } from 'react';
import './About.css'; // Ensure correct import path to CSS file

function About() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your logic for handling form submission, e.g., sending data to backend/API
        console.log('Form submitted:', { name, email, message });
        // Optionally, clear the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                Welcome to our blog where we explore various technical topics and discuss different stacks such as web development, data structures and algorithms (DSA), machine learning (ML), artificial intelligence (AI), JavaScript, and much more.
            </p>
            <p>
                Our goal is to provide valuable insights, tutorials, and practical examples to help developers and enthusiasts learn and grow in their respective fields. Whether you are a beginner looking to start your journey in coding or an experienced professional seeking advanced techniques, you'll find useful content tailored to your needs.
            </p>
            <p>
                Stay tuned as we continue to publish articles that cover a wide range of topics, from fundamental concepts to advanced strategies, ensuring that there's always something new and exciting to discover on our blog.
            </p>

            {/* Contact Form */}
            <div className="contact-form">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default About;
