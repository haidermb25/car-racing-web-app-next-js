'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DriverCoachingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE]">
      <Header />
      
      <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl mb-8">
            DRIVER COACHING
          </h1>

          <div className="space-y-6 text-black">
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                PROFESSIONAL COACHING
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Train directly with accomplished karting champions and professional race car drivers in a private coaching environment. Sessions are customized to improve lap time, driving fundamentals, race strategy, and on-track awareness.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                WHAT YOU'LL LEARN
              </h2>
              <ul className="text-base sm:text-lg leading-relaxed mb-4 space-y-2 list-disc list-inside">
                <li>Lap time improvement techniques</li>
                <li>Driving fundamentals and car control</li>
                <li>Race strategy and positioning</li>
                <li>On-track awareness and safety</li>
                <li>Advanced racing techniques</li>
                <li>Data analysis and performance optimization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                COACHING FORMAT
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Coaching sessions are conducted in a private, one-on-one or small group setting. Your coach will work with you to identify areas for improvement, provide real-time feedback during track sessions, and develop a personalized training plan to help you reach your racing goals.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                BOOK A SESSION
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                To book a coaching session or learn more about our coaching programs, please contact us. Our professional coaches are available for sessions throughout the year and can accommodate drivers of all skill levels.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
