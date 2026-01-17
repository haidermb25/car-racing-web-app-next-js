'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PreEventTestingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE]">
      <Header />
      
      <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl mb-8">
            PRE-EVENT TESTING
          </h1>

          <div className="space-y-6 text-black">
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                STRUCTURED TEST DAYS
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Pre-event testing offers structured, full-length test days held prior to major events. These sessions provide extended track time in an organized format, allowing drivers to dial in setup, refine driving technique, and prepare confidently for race weekend.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                WHAT TO EXPECT
              </h2>
              <ul className="text-base sm:text-lg leading-relaxed mb-4 space-y-2 list-disc list-inside">
                <li>Full-day structured testing sessions</li>
                <li>Extended track time in organized format</li>
                <li>Opportunity to dial in kart setup</li>
                <li>Refine driving technique before race weekend</li>
                <li>Familiarize yourself with the track and conditions</li>
                <li>Build confidence ahead of competition</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                BENEFITS
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Pre-event testing is essential for drivers who want to be fully prepared for race weekend. These sessions allow you to test different setup configurations, practice race starts, work on consistency, and get comfortable with the track layout and racing conditions you'll face during the actual event.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                SCHEDULE & REGISTRATION
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Pre-event testing sessions are typically scheduled the day before major championship events. Check our events calendar for specific dates and registration information. Advance registration is recommended as these sessions often fill up quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
