import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SWSEventsPage() {
  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/Bandeau-WEB-SWS-INTER-2023.png"
          alt="Sodi World Series"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex mt-80">
          <div className="max-w-9xl mx-6 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="text-white uppercase mt-2 font-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6lg tracking-normal leading-none">
                YOUR PATH TO
              </h1>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                THE SODI
              </h2>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                WORLD SERIES.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[98%] py-6 px-2 sm:px-2 lg:px-2 ml-3">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 lg:gap-4">          
            {/* Left Column */}
            <div className="space-y-12 bg-white py-8 px-8">
              {/* ABOUT OUR SWS EVENTS Section */}
              <div>
                <h2 className="text-black uppercase font-black text-2xl sm:text-3xl mb-4">
                  ABOUT OUR SWS EVENTS
                </h2>
                <div className="text-black text-base leading-relaxed space-y-4">
                  <p>
                    Podium TKC Sodi World Series events are competitive, arrive-and-drive karting competitions that bring together drivers of all skill levels for professional racing action.
                  </p>
                  <p>
                    Our SWS program provides a clear pathway for talented drivers to showcase their skills and compete on an international stage. Each event features identical race-prepared karts, ensuring fair competition where driver skill and racecraft determine the outcome.
                  </p>
                  <div className="bg-purple-100 border-l-4 border-purple-500 p-4 my-4">
                    <p className="text-black text-base leading-relaxed">
                      Our flagship SWS program runs twice per month at Apex Racing Center, ensuring equal equipment, controlled conditions, and fair competition where results are earned purely on driving performance.
                    </p>
                  </div>
                  <Link href="/sws-events" className="text-[#56C1FF] hover:opacity-70 transition-opacity underline">
                    Learn more about SWS
                  </Link>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-8xl gap-8 mx-auto">
                <div className="bg-[#E5E5E5] p-12 flex flex-col items-center justify-center text-center">
                  <h3 className="text-black uppercase font-bold text-4xl mb-2 tracking-tight">
                    1 ROUND
                  </h3>
                  
                  <div className="text-black font-black text-8xl mb-4 flex items-start">
                    <span className="text-5xl mt-4">$</span>80
                  </div>
                  
                  <p className="text-black text-xl leading-snug mb-10 max-w-[250px]">
                    + Additional $50 Podium TKC annual membership fee
                  </p>
                  
                  <Link href="/register" className="bg-[#56C1FF] hover:bg-[#40b0f0] text-black uppercase font-bold py-4 px-12 text-2xl tracking-widest transition-colors inline-block text-center">
                    REGISTER
                  </Link>
                </div>

                <a 
                  href="https://www.sodiwseries.com/en-gb/about-the-sws-c1.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-black p-12 flex flex-col justify-center max-w-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer block"
                >
                  <Image
                    src="/thumb_car.jpg"
                    alt="SWS Racer"
                    fill
                    className="object-cover opacity-20"
                  />
                  <div className="relative z-10 text-white">
                    <h3 className="text-white uppercase font-black text-3xl tracking-tighter leading-tight">
                      CREATE YOUR SWS ACCOUNT
                    </h3>
                  </div>
                </a>
              </div>

              {/* JUNIOR & SENIOR Section */}
              <div className="bg-[#E5E5E5] p-8 max-w-6xl">
                {/* JUNIOR Section */}
                <div className="mb-6">
                  <h3 className="text-black uppercase font-black text-4xl mb-2 tracking-tight">
                    JUNIOR
                  </h3>
                  <p className="text-black text-2xl font-medium mb-3">
                    Minimum Racing Weight: 130 lbs
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#56C1FF] text-xl mt-1">▶</span>
                      <span className="text-black text-xl leading-snug">
                        Drivers will add weights (Provided) to the kart to achieve the minimum racing weight
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-400 my-8" />

                {/* SENIOR Section */}
                <div>
                  <h3 className="text-black uppercase font-black text-4xl mb-2 tracking-tight">
                    SENIOR
                  </h3>
                  <p className="text-black text-2xl font-medium mb-3">
                    Minimum Racing Weight: 150 lbs
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#56C1FF] text-xl mt-1">▶</span>
                      <span className="text-black text-xl leading-snug">
                        Drivers will add weights (Provided) to the kart to achieve the minimum racing weight
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#56C1FF] text-xl mt-1">▶</span>
                      <span className="text-black text-xl leading-snug">
                        Drivers MUST be 16yrs + to be eligible to race in this class
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 gap-4">
              {/* CALENDAR Section */}
              <div className="bg-white p-8 max-w-sm font-sans text-black">
                <h2 className="text-4xl font-black mb-10 tracking-tight">CALENDAR</h2>

                <div className="space-y-8 mb-12">
                  {/* Event Item */}
                  {[
                    { month: "MAY", day: "21", round: "ROUND 1", venue: "Apex Racing Center" },
                    { month: "JUN", day: "30", round: "ROUND 2", venue: "Adams Motorsports Park" },
                    { month: "JUL", day: "27", round: "ROUND 3", venue: "Willowsprings Raceway Park" },
                    { month: "AUG", day: "16", round: "ROUND 4", venue: "Apex Racing Center" },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start gap-6">
                      {/* Date Block */}
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-2xl font-medium">{event.month}</span>
                        <span className="text-6xl font-bold">{event.day}</span>
                      </div>

                      {/* Info Block */}
                      <div className="flex flex-col justify-center pt-1">
                        <Link 
                          href="/event-overview" 
                          className="text-3xl font-black border-b-4 border-black inline-block mb-1 hover:opacity-70 transition-opacity cursor-pointer"
                        >
                          {event.round}
                        </Link>
                        <span className="text-2xl font-normal leading-tight max-w-[200px]">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link href="/event-overview" className="text-3xl font-medium underline underline-offset-8 decoration-2 hover:opacity-70 transition-opacity">
                    More Events
                  </Link>
                </div>
              </div>

              {/* Timing Bars */}
              <div className="bg-white p-4 max-w-sm space-y-3">
                <div className="bg-[#56C1FF] text-white uppercase font-black text-2xl py-4 px-6 text-center tracking-tight">
                  QUALIFYING 10 min
                </div>
                <div className="bg-[#56C1FF] text-white uppercase font-black text-2xl py-4 px-6 text-center tracking-tight">
                  FINAL 15 min
                </div>
              </div>

              {/* SODI WORLD SERIES STANDINGS Section */}
              <div className="bg-white p-8 max-w-sm font-sans text-black">
                {/* Header: Uses a thick, extra-bold/black weight with tight line height */}
                <h3 className="text-[38px] leading-[1.1] font-black uppercase mb-6 tracking-tight">
                  SODI WORLD SERIES<br />STANDINGS
                </h3>

                {/* Description: Light to normal weight with generous line spacing */}
                <p className="text-2xl font-normal leading-snug mb-10 max-w-[280px]">
                  View the Summer Sprint Championship points here
                </p>

                {/* Button: Bold border with large, heavy text centered inside */}
                <button className="border-[3px] border-black py-4 px-12 transition-colors hover:bg-black hover:text-white">
                  <span className="text-4xl font-black uppercase tracking-tight">
                    VIEW
                  </span>
                </button>
              </div>

              {/* CONTACT US Section */}
              <div className="bg-black text-white p-10 max-w-sm font-sans">
                {/* Header: Extra heavy weight with tight tracking */}
                <h3 className="text-4xl font-black uppercase mb-10 tracking-tight">
                  CONTACT US
                </h3>

                <div className="space-y-8">
                  {/* Phone Link */}
                  <a 
                    href="tel:+15304005757" 
                    className="flex items-center gap-6 text-white hover:opacity-80 transition-opacity group"
                  >
                    <div className="flex-shrink-0">
                      {/* Solid filled phone icon to match the image's weight */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <span className="text-3xl font-black tracking-tight">+1 (530) 400-5757</span>
                  </a>

                  {/* Email Link */}
                  <a 
                    href="mailto:cs@podiumtkc.com" 
                    className="flex items-center gap-6 text-white hover:opacity-80 transition-opacity group"
                  >
                    <div className="flex-shrink-0">
                      {/* Thick stroked mail icon */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-3xl font-black tracking-tight lowercase">cs@podiumtkc.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="relative w-full aspect-video overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/SWS-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
