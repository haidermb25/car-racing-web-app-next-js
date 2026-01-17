import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />

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
      <div className="bg-white py-12 mx-4 my-4">
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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
                    <Link href="/event-overview" className="w-1/2 border border-black uppercase font-bold text-sm py-2 px-4 text-black whitespace-nowrap text-center hover:opacity-80 transition-opacity">
                      VIEW EVENT
                    </Link>
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

      {/* Sodi World Series Banner Section */}
      <div className="relative mx-4 my-4 overflow-hidden">
        <div className="relative w-full h-[600px]">

          {/* Background Image */}
          <Image
            src="/Bandeau-WEB-SWS-INTER-2023.png"
            alt="Sodi World Series Background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Gradient Overlay (IMPORTANT) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col px-6 lg:px-10">

            {/* Logos */}
            <div className="flex items-center gap-8 pt-6">
              <Image src="/logo-sws.png" alt="SWS Logo" width={100} height={50} />
              <Image src="/PODIUM_ logo design-01.jpg" alt="PODIUM TKC" width={140} height={50} />
            </div>

            {/* Main Text */}
            <div className="flex-1 flex items-center">
              <div className="max-w-xl">
                <h2 className="text-white uppercase font-black text-5xl md:text-6xl leading-tight mb-8">
                  YOUR PATH TO<br />
                  THE SODI<br />
                  WORLD SERIES.
                </h2>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Link href="/register" className="bg-yellow-400 text-black uppercase font-black px-8 py-4 hover:opacity-90 transition-opacity">
                    FIND EVENTS
                  </Link>
                  <Link href="/sws-events" className="bg-white text-black uppercase font-black px-8 py-4 hover:opacity-90 transition-opacity">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      {/* Endurance Racing Section */}
      <div className="bg-white w-[98%] mx-auto my-4">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-stretch">

            {/* LEFT: Text Content */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-16">
              
              {/* Heading */}
              <h2 className="text-black uppercase font-black text-3xl sm:text-4xl md:text-5xl mb-6">
                ENDURANCE RACING
              </h2>

              {/* Body Text */}
              <div className="text-black text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                <p>
                  Endurance racing is returning to California. Podium TKC is building a
                  dedicated endurance karting series with 2, 4, 6, and 12-hour races
                  throughout the year. Designed for teams who care about strategy,
                  consistency, and real competition—clean racing, equal equipment,
                  and a professional experience from green flag to checkered.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-12">
                <button className="border-2 border-black uppercase font-extrabold text-base sm:text-lg md:text-xl py-3 px-6 text-black tracking-wide">
                  LEARN MORE
                </button>

                <button className="bg-yellow-400 uppercase font-extrabold text-base sm:text-lg md:text-xl py-3 px-6 text-black tracking-wide">
                  FIND EVENTS
                </button>

              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/racing.png"
                alt="Endurance Racing"
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Services Section - Three Panels */}
      <div className="w-full px-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

            {/* Panel 1: OPEN TESTING */}
            <div className="group relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden">
              <Image
                src="/thumb_car.jpg"
                alt="Open Testing"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 lg:p-10">
                {/* Top Content */}
                <div>
                  <h3 className="text-white uppercase font-black text-4xl sm:text-5xl lg:text-6xl leading-none mb-5 mt-10">
                    OPEN TESTING
                  </h3>

                  <p className="text-white max-w-[420px] text-base sm:text-lg leading-relaxed">
                    Open testing allows drivers to arrive throughout the day and purchase individual
                    10-minute on-track sessions. Sessions are run on a first-come, first-served basis
                    and are ideal for drivers looking for seat time on their schedule.
                  </p>
                </div>

                {/* CTA */}
                <Link href="/open-testing" className="text-white uppercase font-black text-xl sm:text-2xl tracking-widest hover:opacity-80 transition-opacity self-start mt-10">
                  LEARN MORE &gt;
                </Link>
              </div>
            </div>

            {/* Panel 2: DRIVER COACHING */}
            <div className="group relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden">
              <Image
                src="/racing.png"
                alt="Driver Coaching"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/50"></div>

              <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-white uppercase font-black text-4xl sm:text-5xl lg:text-6xl leading-none mb-5 mt-10">
                    DRIVER COACHING
                  </h3>

                  <p className="text-white max-w-[420px] text-base sm:text-lg leading-relaxed">
                    Train directly with accomplished karting champions and professional race car drivers
                    in a private coaching environment. Sessions are customized to improve lap time,
                    driving fundamentals, race strategy, and on-track awareness.
                  </p>
                </div>

                <Link href="/driver-coaching" className="text-white uppercase font-black text-xl sm:text-2xl tracking-widest hover:opacity-80 transition-opacity self-start mt-10">
                  LEARN MORE &gt;
                </Link>
              </div>
            </div>

            {/* Panel 3: PRE-EVENT TESTING */}
            <div className="group relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden">
              <Image
                src="/sport.png"
                alt="Pre-Event Testing"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/50"></div>

              <div className="relative z-10 h-full flex flex-col  p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-white uppercase font-black text-4xl sm:text-5xl lg:text-6xl leading-none mb-5 mt-10">
                    PRE-EVENT TESTING
                  </h3>

                  <p className="text-white max-w-[420px] text-base sm:text-lg leading-relaxed">
                    Pre-event testing offers structured, full-length test days held prior to major
                    events. These sessions provide extended track time in an organized format,
                    allowing drivers to dial in setup, refine driving technique, and prepare
                    confidently for race weekend.
                  </p>
                </div>

                <Link href="/pre-event-testing" className="text-white uppercase font-black text-xl sm:text-2xl tracking-widest hover:opacity-80 transition-opacity self-start mt-10">
                  LEARN MORE &gt;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>




      {/* Sodi Sport Section */}
      <div className="w-[98%] mx-4 my-4">
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
              <button className="bg-sky-400 text-black uppercase font-bold text-sm sm:text-base py-3 px-12 whitespace-nowrap">
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
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-4 mx-4 my-4">
        <div className="max-w-14xl mx-auto">
          {/* Title */}
          <h2 className="text-black uppercase font-black text-4xl sm:text-3xl md:text-4xl mb-8 text-center">
            2026 EVENTS CALENDAR
          </h2>

          {/* Calendar Grid */}
          <div className="bg-[#F8FAFD] p-2">
            <div className="bg-white border border-gray-300 rounded-[50px] overflow-hidden">
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
                  <div className="flex items-center">
                              <Image
                                src="/podiumtkc2.png"
                                alt="PODIUM TKC"
                                width={260}
                                height={70}
                                priority
                                className="h-[70px] w-auto object-contain"
                              />
                            </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}