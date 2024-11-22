import React, { useState } from 'react';

function NewsletterSubscription() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Failed to subscribe');
        }
    };

    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default NewsletterSubscription;
