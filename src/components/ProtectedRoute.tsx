import { Navigate } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import { Loading } from './ui/loading';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading size="lg" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
