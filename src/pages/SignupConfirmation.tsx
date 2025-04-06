import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';

const SignupConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleResendEmail = async () => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) throw error;

      toast.success('Verification email has been resent!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to resend verification email');
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-genix-darkBlue">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white dark:bg-genix-cardBg rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-genix-accent/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-genix-accent" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Verify your email
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                We've sent a verification email to:
              </p>
              <p className="text-genix-accent font-medium mt-1">
                {email}
              </p>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Please check your inbox and click the verification link to activate your account.
                If you don't see the email, check your spam folder.
              </p>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleResendEmail}
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-genix-accent hover:text-genix-accent/80 focus:outline-none"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Resend verification email
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already verified?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-genix-accent hover:text-genix-accent/80 font-medium"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupConfirmation;