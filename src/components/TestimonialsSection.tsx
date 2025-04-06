
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "GenixAI has transformed our clinic operations completely. The AI scheduling alone has saved us countless hours and significantly reduced no-shows.",
    author: "Dr. Sarah Johnson",
    position: "Medical Director",
    organization: "Pacific Medical Center",
    rating: 5,
    image: "/Sarah.jpg"
  },
  {
    quote: "As someone who's tried many healthcare management systems, GenixAI stands out for its intuitive design and powerful AI capabilities. The HIPAA compliance features give us peace of mind.",
    author: "Dr. Michael Chen",
    position: "Primary Care Physician",
    organization: "Westside Family Practice",
    rating: 5,
    image: "/micheal.jpg"
  },
  {
    quote: "The document processing AI is incredible - it's reduced our administrative workload by nearly 40%. Our staff can now focus more on patient care rather than paperwork.",
    author: "Emma Rodriguez",
    position: "Practice Manager",
    organization: "Sunrise Health Partners",
    rating: 5,
    image: "/Emma.jpg"
  },
  {
    quote: "GenixAI's patient engagement tools have dramatically improved our patient satisfaction scores. The automated follow-ups and reminders have been game-changers.",
    author: "Dr. James Wilson",
    position: "Clinic Owner",
    organization: "Riverdale Medical Group",
    rating: 4,
    image: "/james.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    stopAutoPlay();
    startAutoPlay();
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    stopAutoPlay();
    startAutoPlay();
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-genix-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-genix-darkBlue dark:text-white">
            What Medical Professionals Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from healthcare providers who have transformed their practices with GenixAI.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Carousel Controls */}
          <div className="absolute z-10 inset-y-0 left-0 flex items-center">
            <button
              className="p-2 rounded-full bg-white/80 dark:bg-genix-darkBlue/80 text-genix-darkBlue dark:text-white shadow-md hover:bg-white dark:hover:bg-genix-darkBlue transition-colors -ml-4 md:ml-0"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute z-10 inset-y-0 right-0 flex items-center">
            <button
              className="p-2 rounded-full bg-white/80 dark:bg-genix-darkBlue/80 text-genix-darkBlue dark:text-white shadow-md hover:bg-white dark:hover:bg-genix-darkBlue transition-colors -mr-4 md:mr-0"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Testimonial Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-genix-cardBg rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                        {testimonial.image && (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-genix-darkBlue dark:text-white">
                          {testimonial.author}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonial.position}, {testimonial.organization}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote>
                      <p className="text-lg italic text-gray-700 dark:text-gray-200">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  stopAutoPlay();
                  startAutoPlay();
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-genix-accent w-6'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
