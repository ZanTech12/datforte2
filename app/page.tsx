"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Microscope, ChevronDown } from "lucide-react";
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
  }, [heroImages.length]);

  const youtubeVideos = [
    'https://www.youtube.com/embed/komRxiInLiw',
    'https://www.youtube.com/embed/dDU3FVPurQs?si=VXeJsxPdRx0Tl5P-',
    'https://www.youtube.com/embed/R-50amaWCdg?si=DYhpAnlRMWXVu035',
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Auto-Rotating Hero Container */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-blue-950">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }} // Subtle Ken Burns zoom-out effect
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Adjusted Dark Gradient Overlay for depth and visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/40 to-blue-950/90 backdrop-blur-[3px]"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBWNjBIMFYxMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <p className="text-amber-300 font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
                Welcome to the Future of Education
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
              Igniting Minds,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Shaping Futures
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed font-light mb-10 drop-shadow-lg">
              Datforte Int&apos;l Schools Limited provides world-class education that empowers students to innovate, lead, and excel in a global society.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <Link href="/admissionform" className="group inline-flex items-center gap-2 bg-amber-500 text-blue-950 px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:scale-105">
              Start Your Journey 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Modern Slider Pagination Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                currentImageIndex === index ? "w-12 bg-amber-500" : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 md:mb-20">
            <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3 block">Discover Excellence</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">Why Choose Datforte School?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">We provide a comprehensive, future-ready education that prepares students for the challenges of tomorrow.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <Reveal delay={0.1}>
              <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full group overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Modern Curriculum</h3>
                  <p className="text-slate-500 leading-relaxed">Comprehensive learning tailored to global standards and future technologies.</p>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.2}>
              <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full group overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Expert Teachers</h3>
                  <p className="text-slate-500 leading-relaxed">Dedicated educators committed to nurturing every student's unique potential.</p>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.3}>
              <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full group overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Advanced Facilities</h3>
                  <p className="text-slate-500 leading-relaxed">State-of-the-art labs, modern libraries, and premium sports complexes.</p>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0.4}>
              <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full group overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Award Winning</h3>
                  <p className="text-slate-500 leading-relaxed">Recognized for excellence in education and student development nationwide.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* School Video Showcase Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 md:mb-20">
            <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3 block">Visual Tour</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">School Video Showcase</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Take a visual tour of our vibrant campus and see our students in action.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {youtubeVideos.map((videoUrl, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  {/* Modern subtle gradient border overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <iframe
                    src={videoUrl}
                    title={`School Showcase Video ${index + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden p-10 md:p-16 lg:p-20 text-center shadow-2xl">
              
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 rounded-full filter blur-[100px] opacity-20 -translate-y-1/3 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/3"></div>
                {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBWNjBIMFYxMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Ready to Join Our <br/>
                  <span className="text-amber-400">Community?</span>
                </h2>
                <p className="text-blue-100/90 mb-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                  Take the first step towards a brighter future. Admissions for 2026-2027 are now open.
                </p>
                <Link href="/admissionform" className="group inline-flex items-center gap-2 bg-amber-500 text-blue-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  Start Your Application 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}