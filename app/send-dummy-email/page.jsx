"use client"
import { useState } from 'react';

export default function SendEmailExample() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSendEmail = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "x-mailgun-api-key": process.env.NEXT_PUBLIC_MAILGUN_API_KEY
        },
        body: JSON.stringify({
          "recipient": email,
          "subject": 'Welcome to Our Service!',
          "content": `hi`,
        }),
      });

      const data = await response;
      console.log(data)
      if (response.ok) {
        setMessage('Email sent successfully!');
      } else {
        setMessage(`Error meow: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Send Email Example</h1>
      <input
        type="email"
        placeholder="Recipient's Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button
        onClick={handleSendEmail}
        disabled={isLoading || !email}
        style={{ padding: '10px' }}
      >
        {isLoading ? 'Sending...' : 'Send Email'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
