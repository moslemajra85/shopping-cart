import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
               setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }, 2000);
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-header">
                    <div className="contact-icon">
                        <span className="main-emoji">📧</span>
                        <span className="floating-emoji">💌</span>
                        <span className="floating-emoji">✨</span>
                    </div>
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-subtitle">
                        We'd love to hear from you! Send us a message and we'll respond as soon as possible. 🚀
                    </p>
                </div>

                <div className="contact-form-wrapper">
                    {!isSubmitted ? (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="input-wrapper">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                    <div className="input-border"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-wrapper">
                                    <span className="input-icon">📧</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                    <div className="input-border"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="textarea-wrapper">
                                    <span className="textarea-icon">💬</span>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        rows="5"
                                    ></textarea>
                                    <div className="textarea-border"></div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <span className="btn-icon">🚀</span>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">✅</div>
                            <h2>Message Sent Successfully!</h2>
                            <p>Thank you for reaching out. We'll get back to you soon! 🎉</p>
                        </div>
                    )}
                </div>

                <div className="contact-info">
                    <div className="info-item">
                        <span className="info-emoji">📍</span>
                        <span>123 Shopping Street, Commerce City</span>
                    </div>
                    <div className="info-item">
                        <span className="info-emoji">📞</span>
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="info-item">
                        <span className="info-emoji">⏰</span>
                        <span>Mon - Fri: 9AM - 6PM</span>
                    </div>
                </div>

                <div className="floating-elements">
                    <div className="floating-shape">💫</div>
                    <div className="floating-shape">🌟</div>
                    <div className="floating-shape">✨</div>
                    <div className="floating-shape">💝</div>
                    <div className="floating-shape">🎈</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
