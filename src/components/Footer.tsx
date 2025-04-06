
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-genix-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">Genix<span className="text-genix-accent">AI</span></span>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Revolutionizing healthcare management with AI-powered solutions for medical professionals and facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 hover:scale-110 transform">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Features</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>HIPAA Compliance</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-genix-accent transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform">
                  <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>API Reference</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-genix-cardBg border border-gray-600 rounded-lg focus:outline-none focus:border-genix-accent focus:ring-1 focus:ring-genix-accent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-genix-accent hover:bg-genix-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GenixAI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-genix-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-genix-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-genix-accent transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
