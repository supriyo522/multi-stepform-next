'use client';
import { useEffect, useState } from 'react';


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      className="ml-auto bg-gray-300 dark:bg-gray-700 p-2 rounded"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;