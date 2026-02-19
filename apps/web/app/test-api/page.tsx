'use client';

import { useEffect, useState } from 'react';

export default function TestApiPage() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    fetch(apiUrl)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage(`Error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>API Connection Test</h1>
      <p>Response from API (http://localhost:3001):</p>
      <pre
        style={{
          background: '#f4f4f4',
          padding: '1rem',
          borderRadius: '4px',
          marginTop: '1rem',
        }}
      >
        {message}
      </pre>
    </div>
  );
}
