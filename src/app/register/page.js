'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  // Race registration events data
  const raceEvents = [
    {
      id: 1,
      round: "ROUND 1:",
      title: "JUNIOR SUMMER SPRINT CHAMPIONSHIP",
      price: "$299",
      date: "MAY 21",
      location: "Apex Racing Center",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder - use actual image
    },
    {
      id: 2,
      round: "ROUND 1:",
      title: "SENIOR SUMMER SPRINT CHAMPIONSHIP",
      price: "$299",
      date: "MAY 21",
      location: "Apex Racing Center",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder - use actual image
    },
    {
      id: 3,
      round: "ROUND 1:",
      title: "TKC SENIOR ENDURANCE CHAMPIONSHIP (4HR)",
      price: "$799",
      date: "JUNE 21",
      location: "WILLOWSPRINGS RACEWAY PARK",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder - use actual image
    },
    {
      id: 4,
      round: "ROUND 1:",
      title: "TKC SODI WORLD SERIES SPRINT RACE",
      price: "- 100",
      date: "JUNE 21",
      location: "WILLOWSPRINGS RACEWAY PARK",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder - use actual image
    }
  ];

  const testingEvents = [
    {
      id: 1,
      title: "PRE-EVENT TESTING",
      description: "Drivers can drop in the day before the event for open seat time and testing ahead of the race.",
      date: "MAY 21",
      location: "Apex Racing Center",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder
    },
    {
      id: 2,
      title: "RACE CLASSES",
      price: "- $400",
      description: "Race Classes are 1-on-1 sessions with a professional instructor, focused on driving technique and racecraft",
      date: "JUNE 21",
      location: "Willowsprings Racway Park",
      circuitDirection: "Clockwise",
      layout: "Grand Prix",
      image: "/thumb_car.jpg" // Placeholder
    }
  ];

  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />
      
      {/* RACE REGISTRATION Section */}
      <div className="bg-[#DEDEDE]">
        {/* Header */}
        <div className="bg-[#DEDEDE] py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl">
              RACE REGISTRATION
            </h1>
          </div>
        </div>
        
    
        {/* Event Listings */}
        <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
          <div className="max-w-7xl mx-auto space-y-4">
            {raceEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[#DEDEDE] mx-2 sm:mx-4 lg:mx-8 overflow-hidden"
              >
                {/* Main Layout: Left and Right Sections */}
                <Link href="/registration-page" className="grid grid-cols-1 lg:grid-cols-[1fr_350px] hover:opacity-95 transition-opacity cursor-pointer block">
                  
                  {/* Left Section: Top (Title) and Bottom (Blue Box + Details) */}
                  <div className="flex flex-col p-4 sm:p-6">
                    {/* Top: Title */}
                    <div className="mb-4 sm:mb-6">
                      <p className="text-[#60A5FA] uppercase font-extrabold text-base sm:text-lg mb-0.5">
                        {event.round}
                      </p>
                      <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl lg:text-3xl leading-tight">
                        {event.title} - {event.price}
                      </h2>
                    </div>

                    {/* Bottom: Blue Box and Details Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-4 sm:gap-6 flex-1">
                      {/* Blue Track Layout Box */}
                      <div className="bg-[#60A5FA] flex items-center justify-center p-6 sm:p-8 w-full sm:w-auto">
                        <Image
                          src="/Event.png"
                          alt="Track layout"
                          width={180}
                          height={180}
                          className="object-contain w-full h-full max-w-[180px] max-h-[180px]"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="space-y-2 text-black flex flex-col justify-center">
                        <p className="font-extrabold text-xl sm:text-2xl mb-1">{event.date}</p>
                        <p className="font-extrabold text-xl sm:text-2xl mb-2">{event.location}</p>

                        <p className="text-sm sm:text-base">
                          <span className="font-semibold">Circuit Direction:</span>{" "}
                          {event.circuitDirection}
                        </p>
                        <p className="text-sm sm:text-base">
                          <span className="font-semibold">Layout:</span> {event.layout}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Event Image (100% Height, No Padding) */}
                  <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[250px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TESTING REGISTRATION Section */}
      <div className="bg-[#DEDEDE] mt-12 mb-6">
        {/* Header */}
        <div className="bg-[#DEDEDE] py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl">
              TESTING REGISTRATION
            </h1>
          </div>
        </div>
        
   
        {/* Testing Event Listings */}
        <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
          <div className="max-w-7xl mx-auto space-y-4">
            {testingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-[#DEDEDE] mx-2 sm:mx-4 lg:mx-8 overflow-hidden"
              >
                {/* Main Layout: Left and Right Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px]">
                  
                  {/* Left Section: Top (Title) and Bottom (Blue Box + Details) */}
                  <div className="flex flex-col p-4 sm:p-6">
                    {/* Top: Title */}
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl lg:text-3xl leading-tight">
                        {event.title} {event.price && event.price}
                      </h2>
                      {event.description && (
                        <p className="text-black text-sm sm:text-base mt-3 leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom: Blue Box and Details Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-4 sm:gap-6 flex-1">
                      {/* Blue Track Layout Box */}
                      <div className="bg-[#60A5FA] flex items-center justify-center p-6 sm:p-8 w-full sm:w-auto">
                        <Image
                          src="/Event.png"
                          alt="Track layout"
                          width={180}
                          height={180}
                          className="object-contain w-full h-full max-w-[180px] max-h-[180px]"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="space-y-2 text-black flex flex-col justify-center">
                        <p className="font-extrabold text-xl sm:text-2xl mb-1">{event.date}</p>
                        <p className="font-extrabold text-xl sm:text-2xl mb-2">{event.location}</p>

                        <p className="text-sm sm:text-base">
                          <span className="font-semibold">Circuit Direction:</span>{" "}
                          {event.circuitDirection}
                        </p>
                        <p className="text-sm sm:text-base">
                          <span className="font-semibold">Layout:</span> {event.layout}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Event Image (100% Height, No Padding) */}
                  <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[250px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}