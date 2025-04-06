
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! Our team will contact you soon.");
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-genix-darkBlue text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about how GenixAI can help your healthcare practice? Our team is here to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white dark:bg-genix-darkBlue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white dark:bg-genix-cardBg rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-genix-darkBlue dark:text-white">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                      >
                        <option value="">Select your role</option>
                        <option value="Physician">Physician</option>
                        <option value="Practice Manager">Practice Manager</option>
                        <option value="Administrator">Healthcare Administrator</option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-genix-accent hover:bg-genix-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-genix-darkBlue dark:text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <Phone className="w-6 h-6 text-genix-accent mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-genix-darkBlue dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (800) 555-GENIX</p>
                      <p className="text-gray-600 dark:text-gray-300">Support: +1 (888) 555-HELP</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="w-6 h-6 text-genix-accent mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-genix-darkBlue dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">contact@genixai.com</p>
                      <p className="text-gray-600 dark:text-gray-300">support@genixai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <MapPin className="w-6 h-6 text-genix-accent mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-genix-darkBlue dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Innovation Way<br />
                        Suite 500<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="w-6 h-6 text-genix-accent mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-genix-darkBlue dark:text-white">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM (PT)<br />
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <span className="font-semibold">Support Hours:</span> 24/7
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-gray-50 dark:bg-genix-darkBlue rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2 text-genix-darkBlue dark:text-white">Schedule a Demo</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Want to see GenixAI in action? Schedule a personalized demo with one of our healthcare solutions experts.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-genix-accent hover:text-genix-accent/80 font-medium"
                  >
                    Book a Demo
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white dark:bg-genix-darkBlue">
          <div className="h-96 w-full bg-gray-200 dark:bg-gray-700">
            {/* Map placeholder - In a real implementation, this would be a Google Maps or similar component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-genix-accent mx-auto mb-2" />
                <p className="text-genix-darkBlue dark:text-white font-semibold">
                  GenixAI Headquarters<br />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
