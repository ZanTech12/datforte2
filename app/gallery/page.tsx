"use client";
import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const images = [
  { src: "/images/ict1.jpg", title: "ICT Lab" },
  { src: "/images/ict2.jpg", title: "Practical Session" },
  { src: "/images/sch2.jpg", title: "School Campus" },
  { src: "/images/sch4.jpg", title: "School Life" },
  { src: "/images/spelling.jpg", title: "Spelling Bee" },
  { src: "/images/students.jpg", title: "Our Students" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')"}}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">Gallery</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-blue-100">Glimpses of life at Datforte Int&apos;l Schools Limited</p>
        </div>
      </div>
      
      {/* Uniform Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <Reveal key={index} delay={(index % 3) * 0.1}>
              <div 
                className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 cursor-pointer aspect-[4/3]"
                onClick={() => setCurrentIndex(index)}
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-110" 
                  sizes="(max-width: 768px) 50vw, 33vw" 
                />
                
                {/* Modern Gradient & Glassmorphism Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-white text-xl font-bold tracking-wide flex items-center">
                      {img.title}
                      <ArrowUpRight className="ml-2 h-5 w-5 text-amber-400" />
                    </h3>
                    <p className="text-blue-200 text-sm font-medium mt-1 flex items-center gap-2">
                      <Maximize2 className="h-4 w-4" /> View Image
                    </p>
                  </div>
                </div>

                {/* Subtle ring border on hover */}
                <div className="absolute inset-0 ring-0 ring-amber-500/0 group-hover:ring-2 group-hover:ring-amber-500/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Animated Modern Lightbox Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentIndex(null)}
          >
            {/* Top Bar: Close Button & Counter */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 pointer-events-none">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
                {currentIndex + 1} / {images.length}
              </div>
              <button 
                className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-amber-500 hover:text-blue-900 transition-colors pointer-events-auto border border-white/20"
                onClick={() => setCurrentIndex(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-8 text-white p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-amber-500 hover:text-blue-900 transition-all z-10 active:scale-90 border border-white/20"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={currentIndex}
              className="relative w-full max-w-5xl h-[75vh]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Modern spring-like cubic bezier
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={images[currentIndex].src} 
                alt={images[currentIndex].title} 
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 1024px" 
                priority
              />
            </motion.div>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-8 text-white p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-amber-500 hover:text-blue-900 transition-all z-10 active:scale-90 border border-white/20"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Caption at the bottom */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
                {images[currentIndex].title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}