import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="bg-blue-600 dark:bg-black text-white shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between py-3">
        
        {/* Logo with Animation */}
        <div className="flex items-center">
          <svg width="140" height="50" xmlns="http://www.w3.org/2000/svg">
            <style>
              {`
                @keyframes colorChange {
                  0% { fill: #ff2600; }
                  25% { fill: #FFD700; }
                  50% { fill: #ffffff; }
                  75% { fill: #020066; }
                  100% { fill: #FF6347; }
                }
                .letter {
                  font-family: Arial;
                  font-size: 40px;
                  font-weight: bold;
                  animation: colorChange 4s infinite alternate;
                }
                .c { animation-delay: 0s; }
                .o { animation-delay: 0.5s; }
                .d { animation-delay: 1s; }
                .s { animation-delay: 1.5s; }
              `}
            </style>
            <text x="10" y="40" className="letter c">C</text>
            <text x="40" y="40" className="letter o">O</text>
            <text x="70" y="40" className="letter d">D</text>
            <text x="100" y="40" className="letter s">S</text>
          </svg>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/create" className="hover:text-gray-300">Create Account</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/documentation" className="hover:text-gray-300">Documentation</Link>
          <Link to="/developer" className="hover:text-gray-300">Developers</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full bg-gray-700 dark:bg-gray-200">
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-300" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link to="/" className="block py-2 text-white hover:text-gray-400">Home</Link>
          <Link to="/create" className="block py-2 text-white hover:text-gray-400">Create Account</Link>
          <Link to="/login" className="block py-2 text-white hover:text-gray-400">Login</Link>
          <Link to="/about" className="block py-2 text-white hover:text-gray-400">About</Link>
          <Link to="/documentation" className="block py-2 text-white hover:text-gray-400">Documentation</Link>
          <Link to="/developer" className="block py-2 text-white hover:text-gray-400">Developers</Link>
          <Link to="/contact" className="block py-2 text-white hover:text-gray-400">Contact</Link>
          <Link to="/privacy-policy" className="block py-2 text-white hover:text-gray-400">Privacy Policy</Link>
          <Link to="/terms-conditions" className="block py-2 text-white hover:text-gray-400">Terms & Conditions</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
