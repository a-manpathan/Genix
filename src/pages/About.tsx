
import { Link } from 'react-router-dom';
import { Award, Users, Briefcase, Heart, Globe, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-genix-darkBlue text-white py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About GenixAI
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to transform healthcare through AI technology that simplifies workflows, enhances security, and improves patient outcomes.
              </p>
              <div className="space-y-6 text-gray-300">
                <p>
                  Genix AI Healthcare is at the forefront of a healthcare revolution, leveraging cutting-edge artificial intelligence to redefine the landscape of telehealth and digital care delivery. Our vision is to create a smarter, more accessible healthcare system by equipping providers with advanced AI-driven tools that streamline operations, elevate diagnostic accuracy, and personalize patient experiences.
                </p>
                <p>
                  With a strong focus on innovation, accessibility, and impact, we are developing intelligent platforms that not only enhance clinical workflows but also break down geographical and systemic barriers to quality care. Whether it's through automating administrative tasks, offering predictive analytics, or enabling remote consultations with greater accuracy, Genix AI is committed to transforming how healthcare is delivered and experienced.
                </p>
                <p>
                  We aim to be a trusted partner to healthcare professionals, helping them optimize patient engagement, boost productivity, and deliver better health outcomes—no matter where their patients are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-50 dark:bg-genix-cardBg">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-genix-darkBlue dark:text-white">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                At GenixAI, we're guided by a set of core principles that inform everything we do, from product development to customer support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We are committed to delivering best-in-class solutions that exceed expectations and set new standards in healthcare technology.
                </p>
              </div>
              
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Heart className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Empathy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We design our products with a deep understanding of the challenges and needs of healthcare professionals and their patients.
                </p>
              </div>
              
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Zap className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously explore new technologies and approaches to solve complex healthcare challenges in novel and effective ways.
                </p>
              </div>
              
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Briefcase className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We uphold the highest ethical standards in all aspects of our business, especially in handling sensitive healthcare data.
                </p>
              </div>
              
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in the power of partnership with our clients and within our team to create solutions that truly work.
                </p>
              </div>
              
              <div className="bg-white dark:bg-genix-darkBlue p-8 rounded-xl shadow-lg">
                <Globe className="w-12 h-12 text-genix-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-genix-darkBlue dark:text-white">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive to make advanced AI healthcare technology accessible to medical practices of all sizes and specialties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white dark:bg-genix-darkBlue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-genix-darkBlue dark:text-white">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind GenixAI who bring decades of combined experience in healthcare, technology, and business leadership.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="/team-1.jpg" 
                    alt="Dr. Emily Chen" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://randomuser.me/api/portraits/women/76.jpg";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-genix-darkBlue dark:text-white">Dr. Emily Chen</h3>
                <p className="text-genix-accent mb-2">Co-Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Former physician with 15+ years in healthcare technology leadership.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="/team-2.jpg" 
                    alt="Michael Roberts" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://randomuser.me/api/portraits/men/32.jpg";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-genix-darkBlue dark:text-white">Michael Roberts</h3>
                <p className="text-genix-accent mb-2">Co-Founder & CTO</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI specialist with background in secure healthcare data systems.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="/team-3.jpg" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://randomuser.me/api/portraits/women/44.jpg";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-genix-darkBlue dark:text-white">Sarah Johnson</h3>
                <p className="text-genix-accent mb-2">Chief Medical Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Board-certified physician focused on healthcare workflow optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-genix-accent text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Healthcare Revolution</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience firsthand how GenixAI is transforming healthcare management through intelligent automation and secure data handling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup" className="bg-white text-genix-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Get Started Today
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
