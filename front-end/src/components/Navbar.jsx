import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <h2 className="text-2xl font-bold">Paradise</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
