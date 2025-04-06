
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-genix-darkBlue">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden max-w-5xl mx-auto bg-white dark:bg-genix-cardBg">
            {/* Left Section - Image/Info */}
            <div className="lg:w-5/12 bg-genix-accent p-8 lg:p-12 text-white flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
              <p className="mb-6">
                Log in to your GenixAI account to access your healthcare management dashboard and AI tools.
              </p>
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-2">What you can do:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-genix-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Access your personalized AI dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-genix-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Manage patient records securely</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-genix-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Utilize AI-powered scheduling tools</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleGetStarted}
                className="w-full bg-white text-genix-accent hover:bg-white/90 font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                Get Started Now
              </button>
            </div>
            
            {/* Right Section - Form */}
            <div className="lg:w-7/12 p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-genix-darkBlue dark:text-white">Log in to your account</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </label>
                      <Link 
                        to="/reset-password" 
                        className="text-sm text-genix-accent hover:text-genix-accent/80"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
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
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-genix-accent hover:bg-genix-accent/90 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : "Sign In"}
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-genix-accent hover:text-genix-accent/80 font-medium">
                      Sign up for free
                    </Link>
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

export default Login;
