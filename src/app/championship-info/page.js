import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/register.jpg"
          alt="Go-kart racing"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex mt-80">
          <div className="max-w-9xl mx-6 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="text-[#FFde59] uppercase mt-2 font-[850] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6lg tracking-normal leading-none">
                PODIUM TKC
              </h1>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                SENIOR SUMMER
              </h2>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                SPRINT CHAMPIONSHIP
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[98%]  py-6 px-2 sm:px-2 lg:px-2 ml-3">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 lg:gap-4">          
            {/* Left Column */}
            <div className="space-y-12 bg-white py-8 px-8">
              {/* ABOUT OUR CHAMPIONSHIP Section */}
              <div>
                <h2 className="text-black uppercase font-black text-2xl sm:text-3xl mb-4">
                  ABOUT OUR CHAMPIONSHIP
                </h2>
                <div className="text-black text-base leading-relaxed space-y-4">
                  <p>
                    Podium TKC Senior Summer Sprint Championship is an arrive-and-drive racing league built for drivers 16 years and older who want real race-kart intensity without the full owner budget.
                  </p>
                  <p>
                    Our flagship series delivers the closest thing to true race karting in equally prepared Sodi Sport chassis, engineered for speed, balance, and ultra-close racing. Every kart is identical, every detail controlled — the racing comes down to the driver.
                  </p>
                  <p>
                    Contested across Southern California’s top kart circuits, the Podium TKC Senior Summer Sprint Championship is designed to welcome a wide range of skill levels, from serious newcomers to experienced racers, all competing on a strict, transparent budget.
                  </p>
                  <p>
                    Pure racing. Equal equipment. Real kart feel. This is Podium TKC.
                  </p>
                </div>
              </div>

              {/* Pricing Block */}
             <div class="grid grid-cols-1 md:grid-cols-2 max-w-8xl gap-8 mx-auto">
              <div class="bg-[#E5E5E5] p-12 flex flex-col items-center justify-center text-center">
                <h3 class="text-black uppercase font-bold text-4xl mb-2 tracking-tight">
                  1 ROUND
                </h3>
                
                <div class="text-black font-black text-8xl mb-4 flex items-start">
                  <span class="text-5xl mt-4">$</span>299
                </div>
                
                <p class="text-black text-xl leading-snug mb-10 max-w-[250px]">
                  + Additional $50 Podium TKC annual membership fee
                </p>
                
                <Link href="/register" class="bg-[#56C1FF] hover:bg-[#40b0f0] text-black uppercase font-bold py-4 px-12 text-2xl tracking-widest transition-colors inline-block text-center">
                  REGISTER
                </Link>
              </div>

              <div class="bg-[#56C1FF] p-12 flex flex-col justify-center max-w-lg">
                <div class="text-white space-y-10">
                  
                  <div class="flex justify-between items-baseline border-b border-white/20 pb-2">
                    <span class="uppercase font-black text-3xl tracking-tighter">PRACTICE</span>
                    <span class="uppercase font-black text-3xl tracking-tighter">10 min</span>
                  </div>

                  <div class="flex justify-between items-baseline border-b border-white/20 pb-2">
                    <span class="uppercase font-black text-3xl tracking-tighter">QUALIFYING</span>
                    <span class="uppercase font-black text-3xl tracking-tighter">10 min</span>
                  </div>

                  <div class="flex justify-between items-baseline border-b border-white/20 pb-2">
                    <span class="uppercase font-black text-3xl tracking-tighter">HEAT 1</span>
                    <span class="uppercase font-black text-3xl tracking-tighter">15 min</span>
                  </div>

                  <div class="flex justify-between items-baseline">
                    <span class="uppercase font-black text-3xl tracking-tighter">FINAL</span>
                    <span class="uppercase font-black text-3xl tracking-tighter">18 min</span>
                  </div>
                  
                </div>
              </div>
            </div>

             <div className="bg-[#E5E5E5] p-8 max-w-6xl">
  {/* SENIOR LIGHT Section */}
  <div className="mb-6">
    <h3 className="text-black uppercase font-black text-4xl mb-2 tracking-tight">
      SENIOR LIGHT
    </h3>
    <p className="text-black text-2xl font-medium mb-3">
      Minimum Racing Weight: 160 lbs
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

  {/* SENIOR HEAVY Section */}
  <div>
    <h3 className="text-black uppercase font-black text-4xl mb-2 tracking-tight">
      SENIOR HEAVY
    </h3>
    <p className="text-black text-2xl font-medium mb-3">
      Minimum Racing Weight: 190 lbs
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
          Drivers MUST weigh a minimum 175lbs to be eligible to race in this class
        </span>
      </li>
    </ul>
  </div>
            </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 gap-4">
              {/* REGISTER FOR THE NEXT ROUND! Section */}
             <div className="bg-white p-8 max-w-md">
                {/* Header: Large, bold, and tightly tracked */}
                <h3 className="text-black uppercase font-black text-2xl mb-6 tracking-tighter leading-none">
                  REGISTER FOR THE<br />NEXT ROUND!
                </h3>
                
                {/* Paragraph: Larger text with specific line height */}
                <p className="text-black text-2xl mb-10 leading-snug font-normal">
                  Limited spots. Don't watch it happen! Join us on the grid.
                </p>
                
                {/* Button: Specific yellow, no rounded corners, large text */}
                <button className="bg-[#FFDE59] hover:bg-[#f2d254] text-black uppercase font-black py-4 px-10 text-3xl tracking-tight transition-colors">
                  REGISTER
                </button>
              </div>

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

              {/* CHAMPIONSHIP STANDINGS Section */}
              <div className="bg-white p-8 max-w-sm font-sans text-black">
                {/* Header: Uses a thick, extra-bold/black weight with tight line height */}
                <h3 className="text-[38px] leading-[1.1] font-black uppercase mb-6 tracking-tight">
                  CHAMPIONSHIP<br />STANDINGS
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

      {/* Race Day Photos Section */}
      <div className="w-[97%] ml-4 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Left Side - Blue Panel */}
          <div className="bg-[#56C1FF] p-10 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between min-h-[600px] lg:min-h-[700px]">
            {/* Headline */}
            <div>
              <h2 className="text-white uppercase font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-8 leading-tight tracking-tighter">
                RACE DAY PHOTOS AVALIBLE NOW!
              </h2>
              
              {/* First Paragraph */}
              <p className="text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed font-normal">
                Capture your race with high-quality on-track photography — $5 per photo.
              </p>
              
              {/* Second Paragraph */}
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                Want something next level? Book a professionally shot and edited Instagram Reel for the next round
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
              <button className="bg-[#FFDE59] hover:bg-[#f2d254] text-black uppercase font-black px-8 lg:px-10 py-3 lg:py-4 text-base sm:text-lg tracking-wide transition-colors">
                VIEW PHOTOS
              </button>
              <button className="bg-white hover:bg-gray-100 text-black uppercase font-black px-8 lg:px-10 py-3 lg:py-4 text-base sm:text-lg tracking-wide transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="relative w-full h-[600px] lg:h-[600px] xl:h-[700px]">
            <Image
              src="/racing.png"
              alt="Go-kart racers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}