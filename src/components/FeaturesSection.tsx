
import { Clipboard, ShieldCheck, Clock, PieChart, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Clipboard className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Smart Document Management",
    description: "Automatically process, classify and store medical documents with our AI-powered document management system.",
    link: "/features#document-management"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "HIPAA-Compliant Security",
    description: "End-to-end encryption and security protocols ensure all patient data is protected to HIPAA standards.",
    link: "/features#security"
  },
  {
    icon: <Clock className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Automated Scheduling",
    description: "AI scheduling assistants optimize appointment bookings and reduce no-shows by up to 30%.",
    link: "/features#scheduling"
  },
  {
    icon: <PieChart className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Intelligent Analytics",
    description: "Gain actionable insights from patient data through real-time analytics and predictive modeling.",
    link: "/features#analytics"
  },
  {
    icon: <Users className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Patient Engagement",
    description: "Enhance the patient experience with personalized communication and self-service portals.",
    link: "/features#patient-engagement"
  },
  {
    icon: <Database className="w-10 h-10 text-genix-accent mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Cloud Integration",
    description: "Seamlessly connect with existing healthcare systems and databases through our secure cloud platform.",
    link: "/features#cloud-integration"
  }
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-genix-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-genix-darkBlue dark:text-white">
            Revolutionary Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how GenixAI transforms healthcare management with powerful AI-driven tools designed for modern medical practices.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group feature-card flex flex-col h-full ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-genix-darkBlue dark:text-white group-hover:text-genix-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {feature.description}
              </p>
              <Link 
                to={feature.link} 
                className="interactive-link inline-flex items-center mt-auto"
              >
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
