import React from 'react';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
      <img
        src='logo.jpeg'
        alt="Bouncing"
        className="animate-bounce w-40 h-40"

      />
      <h1 className="text-4xl font-bold text-center text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The requested page could not be found.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">Go back to homepage</Link>
    </div>
  );
}

export default Error404Page;
