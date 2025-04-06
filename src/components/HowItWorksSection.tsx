
import { useState } from 'react';
import { CheckCircle, User, FileText, Lock, Bell } from 'lucide-react';

const steps = [
  {
    icon: <User className="w-12 h-12 text-genix-accent" />,
    title: "Create Your Account",
    description: "Sign up for GenixAI in minutes with our simple onboarding process. No technical expertise required."
  },
  {
    icon: <FileText className="w-12 h-12 text-genix-accent" />,
    title: "Import Your Data",
    description: "Securely connect your existing patient records and medical systems with our automated import tools."
  },
  {
    icon: <Lock className="w-12 h-12 text-genix-accent" />,
    title: "Set Security Preferences",
    description: "Configure HIPAA-compliant security settings and user access controls to protect patient data."
  },
  {
    icon: <Bell className="w-12 h-12 text-genix-accent" />,
    title: "Activate AI Assistants",
    description: "Enable intelligent features like scheduling, document processing, and patient communications."
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-genix-cardBg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-genix-darkBlue dark:text-white">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started with GenixAI is simple. Our platform integrates seamlessly with your existing workflows in four easy steps.
          </p>
        </div>
        
        {/* Desktop Steps */}
        <div className="hidden md:flex justify-between max-w-5xl mx-auto mb-16 relative">
          {/* Progress line */}
          <div className="absolute top-7 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-1 bg-genix-accent transition-all duration-500" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center w-40 relative z-10 cursor-pointer transition-all duration-300 ${
                index <= activeStep ? 'opacity-100' : 'opacity-60'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                index <= activeStep 
                  ? 'bg-genix-accent text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}>
                {index < activeStep ? <CheckCircle className="w-6 h-6" /> : <span className="text-lg font-bold">{index + 1}</span>}
              </div>
              <p className="font-medium text-center text-genix-darkBlue dark:text-white">
                {step.title}
              </p>
            </div>
          ))}
        </div>
        
        {/* Active Step Content */}
        <div className="bg-white dark:bg-genix-darkBlue rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              {steps[activeStep].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-genix-darkBlue dark:text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
          
          {/* Mobile Step Navigation */}
          <div className="md:hidden flex justify-between mt-8">
            <button 
              className="px-4 py-2 border border-genix-accent text-genix-accent rounded-md disabled:opacity-50"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              Previous
            </button>
            <div className="flex space-x-1">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeStep ? 'bg-genix-accent' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                ></div>
              ))}
            </div>
            <button 
              className="px-4 py-2 bg-genix-accent text-white rounded-md disabled:opacity-50"
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
