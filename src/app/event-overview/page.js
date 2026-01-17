'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EventOverview() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE]">
      <Header />
      
      <main className="flex-1">
        {/* Event Title Section - Light Gray Background */}
        <div className="bg-[#DEDEDE] py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#60A5FA] uppercase font-black text-lg sm:text-xl mb-2">ROUND 1</p>
            <h1 className="text-black uppercase font-black text-2xl sm:text-2xl lg:text-2xl xl:text-2xl leading-tight">
              SUMMER SPRINT CHAMPIONSHIP
            </h1>
          </div>
        </div>

        {/* Event Details Section - White Background */}
        <div className="mb-2 ml-11">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[74%_20%] gap-8 lg:gap-12">
              {/* Left Column - Event Summary and Race Day Info */}
              <div className="space-y-8 bg-white py-8 px-4 sm:px-6 lg:px-8">
                {/* EVENT SUMMARY */}
                <div>
                  <h2 className="text-black uppercase font-black text-xl sm:text-2xl mb-4">EVENT SUMMARY</h2>
                  <div className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                    <p>
                      This event is an arrive-and-drive sprint race as part of the Summer Sprint Series, designed to deliver close, competitive racing with minimal barriers to entry. Drivers will complete five on-track sessions, totaling approximately 1 hour and 10 minutes of driving time per competitor, in identical race-prepared karts to ensure fair competition.
                    </p>
                    <p>
                      The series features Junior (ages 12–15) and Senior (16+) classes, with Senior divided into Lite and Heavy categories. Over four championship rounds, drivers earn points each event, with the top performers in each class crowned Summer Sprint Series Champion at season’s end.
                    </p>
                  </div>
                </div>

                {/* RACE DAY INFO */}
                <div>
                  <h2 className="text-black uppercase font-black text-xl sm:text-2xl mb-4">RACE DAY INFO</h2>
                  <div className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                    <p>
                     I've extracted the text from the image:
                      Drivers only need to arrive with their required personal gear, including a helmet and racing suit, with a neck brace required for Junior drivers. Any missing gear is available for rent at the track. Please plan to arrive no later than 8:30 AM to allow time for check-in and waiver signing before the event begins. A parent or legal guardian must be present for any driver under the age of 18, and all participants are required to attend the drivers meeting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Date and Schedule */}
              <div className="space-y-6">
                {/* Date Block - Yellow Background */}
                <div className="bg-yellow-400 p-6 sm:p-8 text-center">
                  <p className="text-black uppercase font-medium text-lg sm:text-xl mb-2">MAY</p>
                  <p className="text-black font-black text-7xl sm:text-8xl lg:text-9xl">21</p>
                </div>

                {/* Schedule Block - Light Blue Background */}
                <div className="bg-[#60A5FA] p-6 sm:p-8 space-y-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="uppercase font-black text-base sm:text-lg">PRACTICE</span>
                    <span className="font-medium text-base sm:text-lg">10 min</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="uppercase font-black text-base sm:text-lg">QUALIFYING</span>
                    <span className="font-medium text-base sm:text-lg">10 min</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="uppercase font-black text-base sm:text-lg">HEAT 1</span>
                    <span className="font-medium text-base sm:text-lg">15 min</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="uppercase font-black text-base sm:text-lg">FINAL</span>
                    <span className="font-medium text-base sm:text-lg">18 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track Information Section - Black Background */}
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[98%] py-6 px-6 bg-black mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center">
              {/* Left Side - Track Info */}
              <div className="space-y-6">
                <h2 className="text-white uppercase font-black text-3xl sm:text-4xl lg:text-5xl">APEX RACING CENTER</h2>
                <div>
                  <p className="text-white uppercase font-medium text-lg sm:text-xl mb-2">NUMBER OF TURNS</p>
                  <p className="text-white font-black text-7xl sm:text-8xl lg:text-9xl">10</p>
                </div>
                <div>
                  <p className="text-white uppercase font-medium text-lg sm:text-xl mb-2">CIRCUIT DIRECTION</p>
                  <p className="text-white uppercase font-black text-3xl sm:text-4xl lg:text-5xl">CLOCKWISE</p>
                </div>
              </div>

              {/* Right Side - Track Layout Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[400px] h-[300px] bg-white/10 flex items-center justify-center border-2 border-white/20 rounded">
                  <Image
                    src="/Event.png"
                    alt="Track Layout"
                    width={400}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Information Section - White Background */}
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[98%] py-6 px-6 bg-white mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Venue Details */}
              <div>
                <h2 className="text-black uppercase font-black text-xl sm:text-2xl mb-4">THE VENUE</h2>
                <p className="text-black font-black text-lg sm:text-xl mb-2">APEX RACING CENTER</p>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  18700 Lake Perris Dr, Perris, CA 92571<br />
                  UNITED STATES
                </p>
              </div>

              {/* Right Column - Map */}
              <div>
                <div className="w-full h-[300px] border border-gray-300 rounded overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=18700+Lake+Perris+Dr,+Perris,+CA+92571&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Apex Racing Center Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
