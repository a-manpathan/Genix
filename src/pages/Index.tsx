
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SecuritySection from '@/components/SecuritySection';
import CtaSection from '@/components/CtaSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
