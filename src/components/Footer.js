import Image from 'next/image';

export default function Footer() {
  return (
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
  );
}