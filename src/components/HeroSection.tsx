
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transforming Healthcare with <span className="text-genix-accent">AI-Powered</span> Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            GenixAI streamlines medical workflows, enhances patient care, and secures healthcare data with advanced artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fade-up" style={{animationDelay: '200ms'}}>
            <Link to="/signup" className="cta-primary text-lg">
              Get Started
            </Link>
            <Link to="/features" className="cta-secondary text-lg">
              Learn More
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-small" onClick={scrollToFeatures}>
            <ChevronDown className="text-white w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
