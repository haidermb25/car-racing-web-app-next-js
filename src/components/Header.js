'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [racingDropdownOpen, setRacingDropdownOpen] = useState(false);
  const [testingDropdownOpen, setTestingDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-end">
          {/* Contact Info and Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Phone - Hide on very small screens */}
            <a href="tel:+15304005757" className="hidden sm:flex items-center gap-2 text-white font-black text-xs sm:text-sm hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 (530) 400 5757</span>
            </a>

            {/* Email - Hide text on small screens */}
            <a href="mailto:contact@example.com" className="flex items-center gap-2 text-white font-black text-xs sm:text-sm hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="hidden sm:inline">CONTACT US</span>
              <span className="sm:hidden">CONTACT</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-[90px] px-2">
            {/* Left Side: Logo */}
            <div className="flex items-center">
              <Image
                src="/podiumtkc.png"
                alt="PODIUM TKC"
                width={260}
                height={70}
                priority
                className="h-[70px] w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
              <button
                onClick={() => {
                  setRacingDropdownOpen(!racingDropdownOpen);
                  setTestingDropdownOpen(false);
                }}
                className={`uppercase font-black text-base xl:text-lg tracking-wide whitespace-nowrap transition-all ${
                  racingDropdownOpen 
                    ? 'text-black border-2 border-red-500 px-3 py-1' 
                    : 'text-black hover:opacity-70'
                }`}
              >
                RACING
              </button>
              <button
                onClick={() => {
                  setTestingDropdownOpen(!testingDropdownOpen);
                  setRacingDropdownOpen(false);
                }}
                className={`uppercase font-black text-base xl:text-lg tracking-wide whitespace-nowrap transition-all ${
                  testingDropdownOpen 
                    ? 'text-black border-2 border-red-500 px-3 py-1' 
                    : 'text-black hover:opacity-70'
                }`}
              >
                TESTING
              </button>
              <a
                href="#"
                className="text-black uppercase font-black text-base xl:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                SPECIAL EVENTS
              </a>
              <Link
                href="/shop"
                className="text-black uppercase font-black text-base xl:text-lg tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                SHOP
              </Link>
            </div>

            {/* Right Side: Register Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Register Button */}
              {/* Register Button (Desktop ONLY) */}
              <Link href="/register" className="hidden lg:block bg-sky-400 hover:bg-sky-500 text-white uppercase font-black px-6 py-2.5 text-sm xl:text-base tracking-wide transition-colors rounded">
                REGISTER
              </Link>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-black p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
         </div>


          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#" className="text-black uppercase font-black text-base tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>RACING</a>
                <a href="#" className="text-black uppercase font-black text-base tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>TESTING</a>
                <a href="#" className="text-black uppercase font-black text-base tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>SPECIAL EVENTS</a>
                <Link href="/shop" className="text-black uppercase font-black text-base tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>SHOP</Link>
                <Link href="/register" className="bg-sky-400 hover:bg-sky-500 text-white uppercase font-black px-6 py-2.5 text-base tracking-wide transition-colors rounded w-full sm:w-auto text-center block" onClick={() => setMobileMenuOpen(false)}>
                  REGISTER
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Racing Dropdown - Full Width */}
      {racingDropdownOpen && (
        <div className="w-full bg-white border-b border-black z-50">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-8">
              {/* Left Side - Championship Cards (3 in one row, 4th on next row) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* JUNIOR SUMMER SPRINT CHAMPIONSHIP */}
                <Link 
                  href="/championship-info" 
                  onClick={() => setRacingDropdownOpen(false)}
                  className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    JUNIOR SUMMER SPRINT CHAMPIONSHIP
                  </h3>
                  <div className="text-black text-sm space-y-1">
                    <p>12-16yrs</p>
                    <p>4 rounds</p>
                  </div>
                </Link>

                {/* SENIOR SUMMER SPRINT CHAMPIONSHIP */}
                <Link 
                  href="/championship-info" 
                  onClick={() => setRacingDropdownOpen(false)}
                  className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    SENIOR SUMMER SPRINT CHAMPIONSHIP
                  </h3>
                  <div className="text-black text-sm space-y-1">
                    <p>16+ yrs</p>
                    <p>4 rounds</p>
                  </div>
                </Link>

                {/* ENDURANCE CHAMPIONSHIP */}
                <Link 
                  href="/championship-info" 
                  onClick={() => setRacingDropdownOpen(false)}
                  className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    ENDURANCE CHAMPIONSHIP
                  </h3>
                  <div className="text-black text-sm space-y-1">
                    <p>14+ yrs</p>
                    <p>TBD</p>
                  </div>
                </Link>

                {/* SODI WORLD SERIES CHAMPIONSHIOP */}
                <Link 
                  href="/championship-info" 
                  onClick={() => setRacingDropdownOpen(false)}
                  className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    SODI WORLD SERIES CHAMPIONSHIOP
                  </h3>
                  <div className="text-black text-sm space-y-1">
                    <p>12-16yrs & 16+ yrs</p>
                    <p>24 Rounds</p>
                  </div>
                </Link>
              </div>

              {/* Right Side - Quicklinks Sidebar (20% width) */}
              <div className="border-l border-black pl-8">
                <h3 className="text-black uppercase font-black text-xl mb-6">
                  QUICKLINKS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Results
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Standings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Karts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testing Dropdown - Full Width */}
      {testingDropdownOpen && (
        <div className="w-full bg-white border-b border-black z-50">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-8">
              {/* Left Side - Testing Content Blocks (3 in one row) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* OPEN TESTING */}
                <div className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    OPEN TESTING
                  </h3>
                  <p className="text-black text-sm">
                    Drivers can drop in and purchase individual sessions for seat time and testing.
                  </p>
                </div>

                {/* PRE-EVENT TESTING */}
                <div className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    PRE-EVENT TESTING
                  </h3>
                  <p className="text-black text-sm">
                    Drivers can drop in the day before the event for open seat time and testing ahead of the race.
                  </p>
                </div>

                {/* RACE CLASSES */}
                <div className="bg-gray-100 border-l-4 border-sky-400 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-black uppercase font-black text-xl mb-3">
                    RACE CLASSES
                  </h3>
                  <p className="text-black text-sm">
                    Drivers can drop in the day before the event for open seat time and testing ahead of the race.
                  </p>
                </div>
              </div>

              {/* Right Side - Quicklinks Sidebar (20% width) */}
              <div className="border-l border-black pl-8">
                <h3 className="text-black uppercase font-black text-xl mb-6">
                  QUICKLINKS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Results
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Standings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black text-base hover:text-sky-400 transition-colors">
                      Karts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}