
import { Shield, LockKeyhole, FileCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecuritySection = () => {
  return (
    <section className="py-20 md:py-32 bg-genix-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            HIPAA-Compliant Security
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            GenixAI implements enterprise-grade security measures to ensure your patient data remains protected and compliant with healthcare regulations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-genix-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-genix-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
            <p className="text-gray-300 mb-4">
              All patient data is encrypted both in transit and at rest using AES-256 encryption, the gold standard for secure healthcare data.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">256-bit encryption protocols</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Secure socket layer (SSL) protection</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Private key management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-genix-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <LockKeyhole className="w-12 h-12 text-genix-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Access Controls</h3>
            <p className="text-gray-300 mb-4">
              Granular role-based access control ensures users can only access the patient data they need for their specific role.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Role-based permissions system</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Two-factor authentication</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Session timeout controls</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-genix-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FileCheck className="w-12 h-12 text-genix-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Audit Trails</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive logging and tracking of all system activities to ensure compliance and enable rapid investigation of any security concerns.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Detailed access logs</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">User activity monitoring</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Immutable activity records</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-genix-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Award className="w-12 h-12 text-genix-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compliance Certifications</h3>
            <p className="text-gray-300 mb-4">
              GenixAI is fully certified for healthcare data management and regularly undergoes third-party security audits.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">HIPAA compliance verified</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">SOC 2 Type II certified</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-genix-accent flex items-center justify-center mt-1 mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Regular penetration testing</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/features#security" className="cta-primary inline-flex items-center">
            Learn More About Our Security
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
