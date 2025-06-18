import React from 'react';

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-200 dark:bg-gray-800 text-center">
      <p>&copy; {new Date().getFullYear()} Paradise Dine & Stay. All rights reserved.</p>
    </footer>
  );
}
