"use client";
import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

// Custom Social SVG Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const staff = [
  { 
    name: "Mr Adebayo Oluwafemi", 
    role: "Principal", 
    img: "/images/principal.jpg", 
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact." 
  },
  { 
    name: "Mr. Raphael Nwabuikwu", 
    role: "Vice Principal", 
    img: "/images/vc.jpg", 
    quote: "Together, we can achieve greatness. Let's work hand-in-hand to shape the future and build a thriving school environment." 
  },
  { 
    name: "Mrs. Obinna Chinomnso", 
    role: "Head of Primary School", 
    img: "/images/Head Of Primary.jpg", 
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth." 
  },
  { 
    name: "Mr. Babatunde Kayode", 
    role: "HOD Primary Section", 
    img: "/images/HOD Primary Section.jpg", 
    quote: "The beautiful thing about learning is that no one can take it away from you" 
  },
  { 
    name: "Mrs. Bamigboye Esther", 
    role: "The School Administrator", 
    img: "/images/admind.jpg", 
    quote: "Every challenge in education is an opportunity for growth; embrace it with open arms." 
  },
  { 
    name: "Mrs. Sokunbi", 
    role: "The School Counsellor", 
    img: "/images/counsel.jpg", 
    quote: "You will face setbacks — everyone does. But every time you get back up, you become stronger, wiser, and more prepared for life beyond school." 
  },
  { 
    name: "Mrs. Onadele", 
    role: "Head of the Nursery Section", 
    img: "/images/hop.jpg", 
    quote: "In these little hands lie the future. Every smile we nurture, every word we speak, and every moment we share helps shape a lifetime of confidence, kindness, and curiosity. Let's build strong roots — one gentle day at a time." 
  },
];

// Individual Staff Card Component with Slide-to-Reveal Animation
function StaffCard({ s, index }: { s: any, index: number }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Reveal key={s.name} delay={index * 0.05}>
      <div 
        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden text-center group h-full cursor-pointer relative border border-gray-100"
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {/* Quote Layer (Hidden underneath) */}
        <div className="absolute inset-0 bg-blue-900 text-white p-5 flex flex-col items-center justify-center z-0">
          <Quote className="h-8 w-8 text-amber-500 mb-3" />
          <p className="text-sm italic font-medium leading-relaxed">"{s.quote}"</p>
          <p className="mt-4 font-bold text-amber-500 text-sm">- {s.name}</p>
          <p className="text-xs text-blue-100">{s.role}</p>
          <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">Click to close</p>
        </div>

        {/* Sliding Content Layer (Image + Text) */}
        <div className={`relative z-10 transition-transform duration-500 ease-in-out transform ${isRevealed ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="overflow-hidden relative aspect-square w-full bg-gray-100">
            <Image 
              src={s.img} 
              alt={s.name} 
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300" 
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-base font-bold text-blue-900">{s.name}</h3>
            <p className="text-amber-500 text-sm mb-3 font-medium mt-1">{s.role}</p>
            
            <div className="flex justify-center space-x-2">
              <span className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-blue-900 hover:text-white transition-colors cursor-pointer"><FacebookIcon /></span>
              <span className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-blue-900 hover:text-white transition-colors cursor-pointer"><TwitterIcon /></span>
              <span className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-blue-900 hover:text-white transition-colors cursor-pointer"><InstagramIcon /></span>
              <span className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-blue-900 hover:text-white transition-colors cursor-pointer"><LinkedinIcon /></span>
            </div>
            
            <p className="text-gray-400 text-[10px] mt-3 uppercase tracking-wider font-medium">Tap to reveal quote</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Staff() {
  return (
    <div>
      <div className="bg-blue-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')"}}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">Meet Our Staff</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-blue-100">Click on a profile to reveal their educational philosophy</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staff.map((s, i) => (
          <StaffCard key={s.name} s={s} index={i} />
        ))}
      </div>
    </div>
  );
}