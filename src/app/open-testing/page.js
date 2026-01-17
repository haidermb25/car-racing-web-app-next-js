'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function OpenTestingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE]">
      <Header />
      
      <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl mb-8">
            OPEN TESTING
          </h1>

          <div className="space-y-6 text-black">
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                WHAT IS OPEN TESTING?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Open testing allows drivers to arrive throughout the day and purchase individual 10-minute on-track sessions. Sessions are run on a first-come, first-served basis and are ideal for drivers looking for seat time on their schedule.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                HOW IT WORKS
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Simply arrive at the track during open testing hours and sign up for available sessions. Each session provides 10 minutes of track time in a race-prepared kart. Sessions are scheduled throughout the day, giving you flexibility to practice when it's convenient for you.
              </p>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                BENEFITS
              </h2>
              <ul className="text-base sm:text-lg leading-relaxed mb-4 space-y-2 list-disc list-inside">
                <li>Flexible scheduling - arrive when it works for you</li>
                <li>Individual sessions - no need to commit to a full day</li>
                <li>First-come, first-served availability</li>
                <li>Perfect for drivers seeking additional practice time</li>
                <li>Ideal for testing setup changes or refining technique</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                PRICING & AVAILABILITY
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Pricing and availability vary by location and date. Please contact us or check our events calendar for specific open testing schedules and rates at your preferred track.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
