"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const eventsData = [
  {
    category: "Primary Events",
    events: [
      {
        title: "Math Wizard Competition",
        date: "2024-08-15",
        description: "An exciting competition where students showcase their mathematical skills through fun puzzles and challenges."
      },
      {
        title: "Art Fair",
        date: "2024-09-10",
        description: "A creative event where students display their artwork, including paintings, drawings, and crafts."
      },
      {
        title: "Physical Fitness Week",
        date: "2024-10-05",
        description: "A week dedicated to various physical activities and sports to promote health and fitness among students."
      }
    ]
  },
  {
    category: "Secondary Events",
    events: [
      {
        title: "Science Fair",
        date: "2024-11-20",
        description: "A fair where students present their science projects and experiments, showcasing their understanding and innovation."
      },
      {
        title: "Computer Science Quiz",
        date: "2024-12-15",
        description: "A quiz competition focused on computer science topics, including programming, algorithms, and tech trivia."
      },
      {
        title: "Social Studies Debate",
        date: "2025-01-10",
        description: "A debate competition where students discuss and argue on various social studies topics, enhancing their public speaking and critical thinking skills."
      }
    ]
  },
  {
    category: "Senior Secondary Events",
    events: [
      {
        title: "Science Olympiad",
        date: "2025-02-25",
        description: "An advanced competition covering physics, chemistry, and biology, aimed at encouraging scientific inquiry and excellence."
      },
      {
        title: "Commerce Fair",
        date: "2025-03-15",
        description: "A fair showcasing projects and presentations related to accountancy, business studies, and economics."
      },
      {
        title: "Mathematics Challenge",
        date: "2025-04-20",
        description: "A challenging event featuring advanced mathematical problems and puzzles designed to test and improve students' mathematical skills."
      }
    ]
  }
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>('Primary Events');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const categoryData = eventsData.find((data) => data.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')"}}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">News & Events</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-blue-100">Stay updated with the latest happenings and upcoming events</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {eventsData.map((data, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === data.category 
                  ? 'bg-amber-500 text-blue-900 font-bold shadow-lg' 
                  : 'bg-white text-blue-900 hover:bg-blue-50 border border-blue-100'
              }`}
              onClick={() => handleCategoryClick(data.category)}
            >
              {data.category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData?.events.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.15}>
              <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition h-full flex flex-col border-t-4 border-blue-900">
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-amber-500 font-semibold mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-4 flex-grow">{event.description}</p>
                  <a href="#" className="text-blue-900 font-semibold hover:text-amber-500 transition-colors inline-flex items-center mt-auto">
                    Learn More 
                    <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}