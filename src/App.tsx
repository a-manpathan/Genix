
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Loading } from "./components/ui/loading";
import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import SignupConfirmation from '@/pages/SignupConfirmation';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';

const queryClient = new QueryClient();

// Page transition component
const PageTransition = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Start loading
    setIsLoading(true);
    
    // Simulate page transition delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Adjust timing as needed
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return isLoading ? <Loading /> : null;
};

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  
  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {isInitialLoading && <Loading size="lg" />}
            <BrowserRouter>
              <PageTransition />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-confirmation" element={<SignupConfirmation />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/:section" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/update-password" element={<UpdatePassword />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
