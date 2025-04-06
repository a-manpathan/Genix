
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-genix-darkBlue to-genix-cardBg text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of healthcare professionals already using GenixAI to streamline operations, enhance security, and improve patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/signup" className="cta-orange text-lg px-8 py-3">
              Get Started Free
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300">
              Request a Demo
            </Link>
          </div>
          
          <div className="mt-10 text-sm text-gray-300">
            <p>No credit card required. Get started with our free tier.</p>
            <p className="mt-2">Have questions? <Link to="/contact" className="text-genix-accent underline">Contact our healthcare solutions team</Link>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
