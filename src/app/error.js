'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // ChunkLoadError happens when the browser cached old HTML referencing
    // chunks from a previous deployment that no longer exist. Reloading
    // fetches fresh HTML with correct chunk hashes.
    if (error?.name === 'ChunkLoadError') {
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h2 className="text-2xl font-bold text-black mb-4">Something went wrong</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/80 transition-all"
      >
        Try again
      </button>
    </div>
  );
}
