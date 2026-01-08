import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Register() {
  return (
    <div className="min-h-screen bg-white">
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
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* ABOUT OUR CHAMPIONSHIP Section */}
              <div>
                <h2 className="text-black uppercase font-black text-2xl sm:text-3xl mb-4">
                  ABOUT OUR CHAMPIONSHIP
                </h2>
                <div className="text-black text-base leading-relaxed space-y-4">
                  <p>
                    Podium TKC Senior Summer Sprint Championship is an arrive-and-drive racing league for drivers 16 years and older. Real race-kart intensity without the full owner budget.
                  </p>
                  <p>
                    Equally prepared Sodi Sport chassis. Identical karts. Racing that comes down to the driver. Contested across Southern California's top kart circuits. Wide range of skill levels welcome.
                  </p>
                  <p>
                    Pure racing. Equal equipment. Real kart feel. This is Podium TKC.
                  </p>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="grid grid-cols-2 gap-0">
                {/* Left - Pricing */}
                <div className="bg-gray-100 p-6 border-r border-gray-300">
                  <h3 className="text-black uppercase font-black text-xl mb-4">1 ROUND</h3>
                  <p className="text-black font-black text-4xl mb-4">$299</p>
                  <p className="text-black text-sm mb-6">+ Additional $50 Podium TKC annual membership fee</p>
                  <button className="bg-sky-400 hover:bg-sky-500 text-white uppercase font-black px-6 py-3 text-sm tracking-wide transition-colors rounded w-full">
                    REGISTER
                  </button>
                </div>

                {/* Right - Session Durations */}
                <div className="bg-sky-400 p-6">
                  <div className="text-white space-y-3">
                    <p className="uppercase font-bold text-sm">PRACTICE 10 min</p>
                    <p className="uppercase font-bold text-sm">QUALIFYING 10 min</p>
                    <p className="uppercase font-bold text-sm">HEAT 1 15 min</p>
                    <p className="uppercase font-bold text-sm">HEAT 2 15 min</p>
                    <p className="uppercase font-bold text-sm">FINAL 18 min</p>
                  </div>
                </div>
              </div>

              {/* SENIOR LIGHT Section */}
              <div>
                <h3 className="text-black uppercase font-black text-xl mb-3">SENIOR LIGHT</h3>
                <p className="text-black font-bold mb-3">Minimum Racing Weight: 160 lbs</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">▶</span>
                    <span className="text-black text-sm">Drivers will add weights (Provided) to the kart to achieve the minimum racing weight.</span>
                  </li>
                </ul>
              </div>

              {/* SENIOR HEAVY Section */}
              <div>
                <h3 className="text-black uppercase font-black text-xl mb-3">SENIOR HEAVY</h3>
                <p className="text-black font-bold mb-3">Minimum Racing Weight: 190 lbs</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">▶</span>
                    <span className="text-black text-sm">Drivers will add weights (Provided) to the kart to achieve the minimum racing weight.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">▶</span>
                    <span className="text-black text-sm">Drivers MUST weigh a minimum 175lbs to be eligible to race in this class.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* REGISTER FOR THE NEXT ROUND! Section */}
              <div>
                <h3 className="text-black uppercase font-black text-xl mb-3">
                  REGISTER FOR THE NEXT ROUND!
                </h3>
                <p className="text-black mb-4">Limited spots. Don't watch it happen! Join us on the grid.</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black uppercase font-black px-6 py-3 text-sm tracking-wide transition-colors rounded w-full">
                  REGISTER
                </button>
              </div>

              {/* CALENDAR Section */}
              <div>
                <h3 className="text-black uppercase font-black text-xl mb-4">CALENDAR</h3>
                <ul className="space-y-3 mb-4">
                  <li className="text-black">
                    <span className="font-bold">MAY 21:</span> ROUND 1 Apex Racing Center
                  </li>
                  <li className="text-black">
                    <span className="font-bold">JUN 30:</span> ROUND 2 Adams Motorsports Park
                  </li>
                  <li className="text-black">
                    <span className="font-bold">JUL 27:</span> ROUND 3 Willowsprings Raceway Park
                  </li>
                  <li className="text-black">
                    <span className="font-bold">AUG 16:</span> ROUND 4 Apex Racing Center
                  </li>
                </ul>
                <a href="#" className="text-black underline text-sm hover:opacity-70">
                  More Events
                </a>
              </div>

              {/* CHAMPIONSHIP STANDINGS Section */}
              <div>
                <h3 className="text-black uppercase font-black text-xl mb-3">
                  CHAMPIONSHIP STANDINGS
                </h3>
                <p className="text-black text-sm mb-4">View the Summer Sprint Championship points here</p>
                <button className="bg-white border-2 border-black text-black uppercase font-black px-6 py-3 text-sm tracking-wide transition-colors rounded hover:bg-black hover:text-white w-full">
                  VIEW
                </button>
              </div>

              {/* CONTACT US Section */}
              <div className="bg-black text-white p-6">
                <h3 className="text-white uppercase font-black text-xl mb-4">CONTACT US</h3>
                <div className="space-y-3">
                  <a href="tel:+15304005757" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+1 (530) 400-5757</span>
                  </a>
                  <a href="mailto:cs@podiumtkc.com" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>cs@podiumtkc.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}