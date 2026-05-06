'use client';
import { useEffect } from 'react';

// global-error.js wraps the root layout — must render <html> + <body>
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    if (error?.name === 'ChunkLoadError') {
      window.location.reload();
    }
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>Something went wrong</h2>
          <p style={{ color: '#6b7280', marginBottom: '32px', maxWidth: '360px' }}>
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            style={{ padding: '12px 32px', borderRadius: '9999px', background: '#000', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
