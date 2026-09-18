"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Microscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Home() {
  const heroImages = [
    "/images/sch1.jpg",
    "/images/sch2.jpg",
    "/images/sch3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotation logic (changes image every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer);
  }, []);

  const youtubeVideos = [
    'https://www.youtube.com/embed/komRxiInLiw',
    'https://www.youtube.com/embed/dDU3FVPurQs?si=VXeJsxPdRx0Tl5P-',
    'https://www.youtube.com/embed/R-50amaWCdg?si=DYhpAnlRMWXVu035',
  ];

  return (
    <div>
      {/* Auto-Rotating Hero Container */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-blue-950">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }} // Subtle Ken Burns zoom-out effect
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Adjusted Dark Gradient Overlay for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/30 to-blue-950/70 backdrop-blur-[2px]"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Reveal>
            <p className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 drop-shadow-lg">
              Welcome to the Future of Education
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8 drop-shadow-2xl">
              Igniting Minds,
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Shaping Futures
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed font-light drop-shadow-lg">
              Datforte Int&apos;l Schools Limited provides world-class education that empowers students to innovate, lead, and excel in a global society.
            </p>
          </Reveal>
        </div>

        {/* Modern Slider Pagination Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                currentImageIndex === index ? "w-10 bg-amber-500" : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Subtle bottom fade to transition into the rest of the site */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 tracking-tight">Why Choose Datforte School?</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">We provide a comprehensive education that prepares students for the challenges of tomorrow.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <BookOpen className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Modern Curriculum</h3>
                <p className="text-gray-500 leading-relaxed">Comprehensive learning tailored to global standards and future technologies.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <Users className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Teachers</h3>
                <p className="text-gray-500 leading-relaxed">Dedicated educators committed to nurturing every student's unique potential.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Microscope className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Advanced Facilities</h3>
                <p className="text-gray-500 leading-relaxed">State-of-the-art labs, modern libraries, and premium sports complexes.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <Award className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Award Winning</h3>
                <p className="text-gray-500 leading-relaxed">Recognized for excellence in education and student development nationwide.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* School Video Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 tracking-tight">School Video Showcase</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Take a visual tour of our vibrant campus and see our students in action.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((videoUrl, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                  <iframe
                    src={videoUrl}
                    title={`School Showcase Video ${index + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-blue-900 rounded-3xl overflow-hidden relative p-12 md:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Take the first step towards a brighter future. Admissions for 2024-2025 are open.</p>
                <Link href="/admissionform" className="inline-flex items-center bg-amber-500 text-blue-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-white transition-all shadow-lg hover:-translate-y-0.5">
                  Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}