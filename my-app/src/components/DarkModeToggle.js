import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`px-4 py-2 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4
        ${darkMode
          ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black text-yellow-200 hover:from-gray-800 hover:to-gray-950 focus:ring-yellow-400"
          : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600 focus:ring-pink-300"
        }`}
    >
      {darkMode ? 'Day' : 'Night'}
    </button>
  );
}

export default DarkModeToggle;
