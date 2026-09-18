import { Lightbulb, Users, ThumbsUp } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/students.jpg')" }}></div>
        <div className="relative z-10 px-4">
          <Reveal>
            <h1 className="text-5xl font-bold tracking-tight">About Datforte Int'l Schools</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-blue-100">Nurturing young minds and shaping future leaders since the schools (both primary and secondary) have been founded</p>
          </Reveal>
        </div>
      </div>

      {/* History / Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src="/images/sch2.jpg" alt="Datforte Int'l Schools Campus" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            <div className="absolute -bottom-8 -right-8 bg-amber-500 text-blue-900 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-2xl font-bold">Holistic</p>
              <p className="font-medium">Education</p>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div>
            <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">About Us</span>
            <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-6 leading-tight">Datforte Int'l Schools</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Datforte Int'l Schools, has the Primary School section founded on 28TH MAY, 1999 and the Secondary School section got established on 20TH JUNE, 2004. The two schools are purpose-built schools dedicated to providing quality education and holistic development with the vision of turning out future leaders who would be taught to read today and lead tomorrow.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The school emphasizes academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced science labs, spacious classrooms, pupils and students oriented educators.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition text-center border-t-4 border-blue-900 h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-500 leading-relaxed">
                We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition text-center border-t-4 border-amber-500 h-full">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Teamwork</h3>
              <p className="text-gray-500 leading-relaxed">
                We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition text-center border-t-4 border-blue-900 h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-500 leading-relaxed">
                Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}