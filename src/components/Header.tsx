
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/providers/ThemeProvider';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Separate effect for system dark mode preference - runs once on mount
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeQuery.matches && !isDarkMode) {
      toggleDarkMode();
    }
  }, []); // Empty dependency array means this only runs once on mount

  // Scroll handling effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update background opacity
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Only depend on lastScrollY

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-genix-darkBlue/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-bold text-genix-darkBlue dark:text-white group-hover:scale-105 transition-transform duration-300">Genix<span className="text-genix-accent">AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-genix-darkBlue dark:text-white">
            Home
          </Link>
          <Link to="/features" className="nav-link text-genix-darkBlue dark:text-white">
            Features
          </Link>
          <Link to="/about" className="nav-link text-genix-darkBlue dark:text-white">
            About Us
          </Link>
          <Link to="/contact" className="nav-link text-genix-darkBlue dark:text-white">
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 icon-hover"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/login" className="text-genix-accent border border-genix-accent hover:bg-genix-accent hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:shadow-md">
            Login
          </Link>
          <Link to="/signup" className="cta-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-genix-darkBlue dark:text-white hover:text-genix-accent dark:hover:text-genix-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-genix-darkBlue/95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-genix-darkBlue dark:text-white hover:text-genix-accent dark:hover:text-genix-accent transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-genix-darkBlue dark:text-white hover:text-genix-accent dark:hover:text-genix-accent transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-700"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="text-genix-darkBlue dark:text-white hover:text-genix-accent dark:hover:text-genix-accent transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-700"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-genix-darkBlue dark:text-white hover:text-genix-accent dark:hover:text-genix-accent transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link 
                to="/login" 
                className="flex-1 text-center text-genix-accent border border-genix-accent hover:bg-genix-accent hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:shadow-md"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="flex-1 text-center cta-primary"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
