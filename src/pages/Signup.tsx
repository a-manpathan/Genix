
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, User, Lock, Eye, EyeOff, CheckCircle, Briefcase, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Validate first step
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast.error('Please fill in all required fields');
        return;
      }
      if (!formData.password || !formData.confirmPassword) {
        toast.error('Please enter and confirm your password');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (formData.password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First, create the auth user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        },
      });

      if (signUpError) throw signUpError;

      if (!data.user?.id) {
        throw new Error('User creation failed');
      }

      // Create the profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          user_id: data.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          organization: formData.organization,
          role: formData.role,
          phone: formData.phone,
        });

      if (profileError) throw profileError;

      // Show success message with email verification instructions
      toast.success(
        <div className="space-y-2">
          <p className="font-semibold">Account created successfully!</p>
          <p className="text-sm">
            We've sent a confirmation email to <span className="font-medium">{formData.email}</span>
          </p>
          <p className="text-sm">Please check your inbox and click the activation link to complete your registration.</p>
        </div>,
        {
          duration: 6000, // Show for 6 seconds
        }
      );

      // Navigate to a confirmation page instead of login
      navigate('/signup-confirmation', { 
        state: { 
          email: formData.email 
        }
      });
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    'HIPAA-compliant patient records',
    'AI-powered scheduling',
    'Smart document management',
    'Secure messaging system',
    'Practice analytics dashboard',
    'Patient engagement tools'
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-genix-darkBlue">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
            {/* Left Section - Form */}
            <div className="lg:w-7/12 bg-white dark:bg-genix-cardBg p-8 lg:p-12 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl shadow-xl">
              <div className="max-w-xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-genix-darkBlue dark:text-white">Create Your GenixAI Account</h1>
                
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="relative">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                      <div 
                        style={{ width: `${(currentStep / 2) * 100}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-genix-accent transition-all duration-500"
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <div className={`text-sm ${currentStep >= 1 ? 'text-genix-accent' : 'text-gray-500 dark:text-gray-400'}`}>
                        Account Details
                      </div>
                      <div className={`text-sm ${currentStep >= 2 ? 'text-genix-accent' : 'text-gray-500 dark:text-gray-400'}`}>
                        Professional Information
                      </div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Account Details */}
                  {currentStep === 1 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="John"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Doe"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full pl-10 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Must be at least 8 characters long.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full pl-10 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            >
                              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-genix-accent hover:bg-genix-accent/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    </>
                  )}
                  
                  {/* Step 2: Professional Information */}
                  {currentStep === 2 && (
                    <>
                      <div className="mb-6">
                        <label htmlFor="organization" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Organization / Practice Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Briefcase className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            id="organization"
                            name="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Your medical practice or organization"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="role" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Your Role <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="Physician">Physician</option>
                          <option value="Nurse">Nurse</option>
                          <option value="Practice Manager">Practice Manager</option>
                          <option value="Administrator">Healthcare Administrator</option>
                          <option value="IT Professional">IT Professional</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-genix-accent border-gray-300 rounded focus:ring-genix-accent"
                            required
                          />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            I agree to the <Link to="/terms" className="text-genix-accent hover:text-genix-accent/80 underline">Terms of Service</Link> and <Link to="/privacy" className="text-genix-accent hover:text-genix-accent/80 underline">Privacy Policy</Link>
                          </span>
                        </label>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="bg-genix-accent hover:bg-genix-accent/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Creating Account...
                            </>
                          ) : "Create Account"}
                        </button>
                      </div>
                    </>
                  )}
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-genix-accent hover:text-genix-accent/80 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Section - Features */}
            <div className="lg:w-5/12 bg-genix-darkBlue p-8 lg:p-12 rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl shadow-xl">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-6">Why Choose GenixAI?</h2>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-genix-accent mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-genix-cardBg rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 overflow-hidden mr-4">
                      <img 
                        src="/testimonial-avatar.jpg" 
                        alt="Dr. Sarah Johnson" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://randomuser.me/api/portraits/women/45.jpg";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                      <p className="text-sm text-gray-300">Medical Director, Pacific Medical Center</p>
                    </div>
                  </div>
                  <p className="italic text-gray-300">
                    "GenixAI has transformed our clinic operations completely. The AI scheduling alone has saved us countless hours and significantly reduced no-shows."
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="font-semibold mb-2">Try GenixAI Risk-Free</p>
                  <p className="text-sm text-gray-300 mb-4">
                    14-day free trial. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
