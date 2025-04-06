
import { useEffect } from 'react';
import { ArrowRight, Clipboard, ShieldCheck, Clock, PieChart, Users, Database, Zap, Stethoscope, FileText, Bell, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  // Scroll to specific feature section if URL hash exists
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-genix-darkBlue text-white py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features for Modern Healthcare
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore how GenixAI streamlines workflows, ensures HIPAA compliance, and enhances patient care through innovative AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-white dark:bg-genix-darkBlue">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-genix-darkBlue dark:text-white">
              Comprehensive Healthcare Management
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div id="document-management" className="feature-card">
                <Clipboard className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  Smart Document Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automatically process, classify and store medical documents with our AI-powered document management system.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Intelligent document recognition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Automated medical coding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Electronic record conversion</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div id="security" className="feature-card">
                <ShieldCheck className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  HIPAA-Compliant Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  End-to-end encryption and security protocols ensure all patient data is protected to HIPAA standards.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">AES-256 encryption</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Role-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Comprehensive audit trails</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div id="scheduling" className="feature-card">
                <Clock className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  Automated Scheduling
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI scheduling assistants optimize appointment bookings and reduce no-shows by up to 30%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Smart conflict resolution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Automated patient reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Resource optimization</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div id="analytics" className="feature-card">
                <PieChart className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  Intelligent Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Gain actionable insights from patient data through real-time analytics and predictive modeling.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Customizable dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Predictive health trends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Financial performance metrics</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div id="patient-engagement" className="feature-card">
                <Users className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  Patient Engagement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enhance the patient experience with personalized communication and self-service portals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Patient portals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Automated follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Feedback collection and analysis</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div id="cloud-integration" className="feature-card">
                <Database className="w-10 h-10 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white">
                  Cloud Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Seamlessly connect with existing healthcare systems and databases through our secure cloud platform.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">API-based integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Legacy system compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Real-time data synchronization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Additional Features */}
            <h3 className="text-2xl font-bold text-center mb-10 text-genix-darkBlue dark:text-white">
              Additional AI Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                <Zap className="w-8 h-8 text-genix-accent mr-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-genix-darkBlue dark:text-white">Billing Automation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reduce coding errors and accelerate reimbursement with AI-powered billing and claims processing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                <Stethoscope className="w-8 h-8 text-genix-accent mr-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-genix-darkBlue dark:text-white">Clinical Decision Support</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-assisted diagnostics and treatment suggestions based on the latest medical research.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                <FileText className="w-8 h-8 text-genix-accent mr-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-genix-darkBlue dark:text-white">Automated Reporting</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Generate comprehensive reports for regulatory compliance and business intelligence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                <Bell className="w-8 h-8 text-genix-accent mr-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-genix-darkBlue dark:text-white">Smart Alerts & Notifications</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Proactive alerts for patient health trends, appointment conflicts, and business operations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                <MessageSquare className="w-8 h-8 text-genix-accent mr-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-genix-darkBlue dark:text-white">Virtual Health Assistants</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered chatbots for patient triage, appointment booking, and common inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-genix-accent/10 dark:bg-genix-accent/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-genix-darkBlue dark:text-white">
              Ready to Experience GenixAI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals already transforming their practices with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup" className="cta-primary">
                Start Your Free Trial
              </Link>
              <Link to="/contact" className="bg-transparent border border-genix-accent text-genix-accent hover:bg-genix-accent/10 font-semibold py-2.5 px-6 rounded-full transition-all duration-300">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Features;
