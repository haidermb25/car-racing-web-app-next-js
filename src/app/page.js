import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl ml-120 px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-end">
          {/* Contact Info and Social Icons */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Phone */}
            <a href="tel:+15304005757" className="flex items-center gap-2 text-white font-black text-sm sm:text-base hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 (530) 400 5757</span>
            </a>

            {/* Email */}
            <a href="mailto:contact@example.com" className="flex items-center gap-2 text-white font-black text-sm sm:text-base hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>CONTACT US</span>
            </a>

            {/* Social Icons */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-black">
        <div className="max-w-7xl mx-10 px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center gap-12 lg:gap-80">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col leading-tight">
                <span className="text-black font-black text-sm sm:text-base uppercase italic">PODIUM</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-black font-black text-2xl sm:text-3xl uppercase italic">TKC</span>
                  {/* Checkered Flag */}
                  <svg width="24" height="24" viewBox="0 0 16 16" className="inline-block flex-shrink-0">
                    <rect width="8" height="8" fill="#60a5fa" />
                    <rect x="8" y="8" width="8" height="8" fill="#60a5fa" />
                    <rect x="8" y="0" width="8" height="8" fill="white" />
                    <rect x="0" y="8" width="8" height="8" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

           {/* Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="#" className="text-black uppercase font-black text-base sm:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap">RACING</a>
            <a href="#" className="text-black uppercase font-black text-base sm:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap">TESTING</a>
            <a href="#" className="text-black uppercase font-black text-base sm:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap">SPECIAL EVENTS</a>
            <a href="#" className="text-black uppercase font-black text-base sm:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap">SHOP</a>
          </div>

          </div>

          {/* Right Side: Register Button */}
          <div className="flex items-center mx-90">
            <button className="bg-sky-400 hover:bg-sky-500 text-white uppercase font-black px-6 py-2.5 text-base sm:text-lg tracking-wide transition-colors rounded">
              REGISTER
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/thumb_car.jpg"
          alt="Go-kart racing"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex mt-20">
          <div className="max-w-7xl mx-6 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="text-sky-400 uppercase mt-2 font-[750] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6lg tracking-normal leading-none">
                4-STROKE
          </h1>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                COMPETITIVE
              </h2>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                ARRIVE & DRIVE
              </h2>
              <h2 className="text-white uppercase mt-2 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl tracking-normal leading-none">
                KARTING
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Championship Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-black uppercase font-black text-3xl sm:text-4xl md:text-5xl mb-8">
            2026 SUMMER SPRINT CHAMPIONSHIP
          </h2>

          {/* Scrollable Event Cards - Centered */}
          <div className="flex justify-center overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
                {/* Event Card 1 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">MAY 21</p>
                    <p className="text-black text-sm mb-6">Apex Racing Center</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">JUNE 30</p>
                    <p className="text-black text-sm mb-6">Adams Motorsports Park</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">JULY 27</p>
                    <p className="text-black text-sm mb-6">Willowsprings Raceway</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>

                {/* Event Card 4 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">AUGUST 24</p>
                    <p className="text-black text-sm mb-6">Apex Formula Track</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>

                {/* Event Card 5 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">SEPTEMBER 14</p>
                    <p className="text-black text-sm mb-6">Speedway Circuit</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>

                {/* Event Card 6 */}
                <div className="flex-shrink-0 w-64 bg-white">
                  {/* Event Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Event.png"
                      alt="Race Track"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Event Details */}
                  <div className="p-4 flex flex-col">
                    <p className="text-black uppercase font-bold text-xl mb-2">OCTOBER 5</p>
                    <p className="text-black text-sm mb-6">Thunder Race Park</p>
                    <button className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap">
                      VIEW EVENT
                    </button>
                  </div>
                </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gray-300 rounded-full relative">
              <div className="absolute left-0 top-0 h-full w-1/4 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Endurance Racing Section */}
      <div className="bg-white py-12 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col px-4 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-12">
              {/* Heading */}
              <h2 className="text-black uppercase font-black text-3xl sm:text-4xl md:text-5xl mb-6">
                ENDURANCE RACING
              </h2>
              
              {/* Body Text */}
              <div className="text-black text-base sm:text-lg leading-relaxed mb-8">
                <p className="mb-4">
                  Endurance racing is back in California. Podium TKC is bringing you a dedicated karting series featuring 2, 4, 6, and 12-hour races. This is about strategy, consistency, real competition, clean racing, equal equipment, and a professional experience.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* LEARN MORE Button */}
                <button className="border-2 border-black uppercase font-bold text-sm sm:text-base py-3 px-6 text-black whitespace-nowrap">
                  LEARN MORE
                </button>
                
                {/* FIND EVENTS Button */}
                <button className="bg-yellow-400 uppercase font-bold text-sm sm:text-base py-3 px-6 text-black whitespace-nowrap">
                  FIND EVENTS
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full h-full min-h-[400px] lg:min-h-[500px] relative">
              <Image
                src="/racing.png"
                alt="Endurance Racing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sodi Sport Section */}
      <div className="w-full">
        {/* Top Image Section */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
            <Image
            src="/sport.png"
            alt="Sodi Sport Go-Kart"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Text and Buttons Section */}
        <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase">
                <span className="text-white">SODI</span>{' '}
                <span className="text-orange-500">SPORT</span>
              </h2>
            </div>

            {/* Descriptive Text */}
            <div className="text-white text-base sm:text-lg leading-relaxed mb-8">
              <p>
                The Sodi Sport chassis delivers the closest thing to a true race-kart experience without the cost or complexity of owning one. Built with the same racing DNA found in Sodikart's championship-winning platforms, the Sport chassis offers real kart geometry, direct steering feel, and predictable grip that rewards driver skill and racecraft. Every Sodi Sport in the fleet is set up to be extremely even, creating a level playing field where outcomes are decided by the driver not equipment resulting in tight packs, real overtakes, and genuine wheel-to-wheel racing.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* LEARN MORE Button */}
              <button className="bg-sky-400 text-white uppercase font-bold text-sm sm:text-base py-3 px-6 whitespace-nowrap">
                LEARN MORE
              </button>
              
              {/* TESTING Button */}
              <button className="bg-white text-black uppercase font-bold text-sm sm:text-base py-3 px-6 whitespace-nowrap">
                TESTING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Calendar Section */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-black uppercase font-black text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
            2026 EVENTS CALENDAR
          </h2>

          {/* Calendar Grid */}
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-gray-300">
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">SUN</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">MON</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">TUE</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">WED</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">THU</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">FRI</div>
              <div className="p-3 text-center text-black uppercase font-bold text-sm border-r border-gray-300 last:border-r-0">SAT</div>
            </div>

            {/* Calendar Dates */}
            <div className="grid grid-cols-7">
              {/* Row 1 */}
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">30</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">Dec 1</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">2</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">3</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">4</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">5</div>
              <div className="p-3 text-center text-black border-b border-gray-300 aspect-square flex items-center justify-center">6</div>
              
              {/* Row 2 */}
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">7</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">8</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">9</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">10</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">11</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">12</div>
              <div className="p-3 text-center text-black border-b border-gray-300 aspect-square flex items-center justify-center">13</div>
              
              {/* Row 3 */}
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">14</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">15</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">16</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">17</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">18</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">19</div>
              <div className="p-3 text-center text-black border-b border-gray-300 aspect-square flex items-center justify-center">20</div>
              
              {/* Row 4 */}
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">21</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">22</div>
              {/* Dec 23 - Highlighted */}
              <div className="p-3 text-center text-white border-r border-b border-gray-300 aspect-square flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">23</div>
              </div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">24</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">25</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">26</div>
              <div className="p-3 text-center text-black border-b border-gray-300 aspect-square flex items-center justify-center">27</div>
              
              {/* Row 5 */}
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">28</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">29</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">30</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">31</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">Jan 1</div>
              <div className="p-3 text-center text-black border-r border-b border-gray-300 aspect-square flex items-center justify-center">2</div>
              <div className="p-3 text-center text-black border-b border-gray-300 aspect-square flex items-center justify-center">3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Upper Section - Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center justify-items-center">
            {/* Left Logo - SODI KART RACING */}
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/sodikart.png"
                alt="SODI KART RACING"
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-2xl sm:text-3xl uppercase italic">SODI</span>
                <span className="text-orange-500 font-bold text-sm sm:text-base uppercase italic">KART RACING</span>
              </div>
            </div>

            {/* Middle Logo - FKP */}
            <div className="flex items-center justify-center">
              <Image
                src="/Go-kart inspired FKP logo design.png"
                alt="FKP"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Right Logo - PE */}
            <div className="flex items-center justify-center">
              <Image
                src="/vector logo 1.png"
                alt="PE"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          {/* Lower Section - Links and PODIUM TKC Logo */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 - RACING */}
            <div>
              <h3 className="text-white uppercase font-bold text-lg mb-4">RACING</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Junior Sprint Championships</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Senior Sprint Championships</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Endurance Championships</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Special Events</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Driver Coaching</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Testings</a></li>
              </ul>
            </div>

            {/* Column 2 - ABOUT */}
            <div>
              <h3 className="text-white uppercase font-bold text-lg mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Introduction</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Karts</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Drivers Guide</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">FAQ's</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Jobs</a></li>
              </ul>
            </div>

            {/* Column 3 - MEDIA */}
            <div>
              <h3 className="text-white uppercase font-bold text-lg mb-4">MEDIA</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Driver Photos</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">News</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Podium TKC TV</a></li>
                <li><a href="#" className="text-white text-sm hover:opacity-80 transition-opacity">Instagram</a></li>
              </ul>
            </div>

            {/* Column 4 - PODIUM TKC Logo */}
            <div className="flex items-start justify-center md:justify-end">
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-base uppercase italic">PODIUM</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-black text-3xl uppercase italic">TKC</span>
                  {/* Checkered Flag */}
                  <svg width="24" height="24" viewBox="0 0 16 16" className="inline-block flex-shrink-0">
                    <rect width="8" height="8" fill="#60a5fa" />
                    <rect x="8" y="8" width="8" height="8" fill="#60a5fa" />
                    <rect x="8" y="0" width="8" height="8" fill="white" />
                    <rect x="0" y="8" width="8" height="8" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}