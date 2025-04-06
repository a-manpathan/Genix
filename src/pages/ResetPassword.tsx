import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;

      setIsEmailSent(true);
      toast.success('Password reset instructions have been sent to your email');
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset instructions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-genix-darkBlue">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white dark:bg-genix-cardBg rounded-2xl shadow-xl p-8">
            {!isEmailSent ? (
              <>
                <div className="text-center mb-8">
                  <div className="mx-auto w-16 h-16 bg-genix-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-genix-accent" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Reset Password
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>
                </div>

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
                        Sending...
                      </div>
                    ) : "Send Reset Instructions"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Check your email
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We've sent password reset instructions to:
                </p>
                <p className="text-genix-accent font-medium mb-6">{email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Click the link in the email to reset your password. If you don't see the email, check your spam folder.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="text-genix-accent hover:text-genix-accent/80 font-medium"
                >
                  Return to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;