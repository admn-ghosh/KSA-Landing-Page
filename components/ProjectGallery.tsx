import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  alt: string;
  imageSrc: string;
}

const PROJECTS: Project[] = [
  {
    title: "Industrial Delivery",
    description: "2,500 m² PIR roof panels - Industrial delivery",
    alt: "Sandwich panel delivery across GCC - Industrial PIR Roof",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
  },
  {
    title: "Commercial Delivery",
    description: "1,800 m² Rockwool wall system - Commercial delivery",
    alt: "Sandwich panel delivery across GCC - Commercial Rockwool Wall",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Mixed System Delivery",
    description: "3,200 m² mixed panel system - Mixed delivery",
    alt: "Sandwich panel delivery across GCC - Mixed System",
    imageSrc: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Industrial Roof Delivery",
    description: "1,500 m² PUR roof system - Industrial delivery",
    alt: "Sandwich panel delivery across GCC - Industrial PUR Roof",
    imageSrc: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Storage Facility Delivery",
    description: "2,100 m² PIR system - Storage facility delivery",
    alt: "Sandwich panel delivery across GCC - Storage PIR System",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Commercial Wall Delivery",
    description: "1,600 m² wall panels - Commercial delivery",
    alt: "Sandwich panel delivery across GCC - Commercial Wall Panels",
    imageSrc: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1200&q=80"
  }
];

const ProjectGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = 0;
    touchEndX.current = 0;
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Our Work Across GCC</h2>
          <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
            As a <span className="font-semibold text-emerald-800">leading sandwich panels supplier in Saudi Arabia</span> and the GCC, we've delivered trusted panel solutions to contractors and developers across the region.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Area */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-stone-200 bg-stone-100 relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={project.imageSrc} 
                  alt={project.alt}
                  className="object-cover w-full h-full"
                  loading={index === 0 ? "eager" : "lazy"} // Eager load first image for LCP
                  width="1200"
                  height="675"
                />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-10 text-white">
                   <div className="border-l-4 border-emerald-500 pl-4">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-stone-200 text-base md:text-lg">{project.description}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-emerald-600/90 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 opacity-80 hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-emerald-600/90 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 opacity-80 hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-stone-300 hover:bg-emerald-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;