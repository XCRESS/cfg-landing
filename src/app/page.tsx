"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 overflow-hidden">
      <section className="relative w-full max-w-6xl">

        {/* Hand-crafted CFG letterforms using lines - curved & drawn animation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-16">

          {/* Letter C - 5 concentric arcs with drawing animation */}
          <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-56">
            {/* Arc 1 - outermost */}
            <div
              className={`absolute top-0 left-0 w-full h-full border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '200ms'
              }}
            />
            {/* Arc 2 */}
            <div
              className={`absolute top-[4.5%] left-[4.5%] w-[91%] h-[91%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '300ms'
              }}
            />
            {/* Arc 3 */}
            <div
              className={`absolute top-[9%] left-[9%] w-[82%] h-[82%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '400ms'
              }}
            />
            {/* Arc 4 */}
            <div
              className={`absolute top-[13.5%] left-[13.5%] w-[73%] h-[73%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '500ms'
              }}
            />
            {/* Arc 5 - innermost */}
            <div
              className={`absolute top-[18%] left-[18%] w-[64%] h-[64%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '600ms'
              }}
            />
          </div>

          {/* Letter F - 4 vertical lines + 6 horizontal lines (3 top, 3 middle) */}
          <div className="relative w-28 h-36 sm:w-32 sm:h-44 md:w-36 md:h-56">
            {/* 4 Vertical lines */}
            <div
              className={`absolute left-[5%] top-0 w-[3px] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '750ms' }}
            />
            <div
              className={`absolute left-[15%] top-0 w-[3px] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '850ms' }}
            />
            <div
              className={`absolute left-[25%] top-0 w-[3px] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '950ms' }}
            />
            <div
              className={`absolute left-[35%] top-0 w-[3px] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '1050ms' }}
            />

            {/* 3 Horizontal lines at top - full width */}
            <div
              className={`absolute top-[5%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[65%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}
            />
            <div
              className={`absolute top-[12%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[65%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1300ms' }}
            />
            <div
              className={`absolute top-[19%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[65%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1400ms' }}
            />

            {/* 3 Horizontal lines at middle - shorter */}
            <div
              className={`absolute top-[50%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[50%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1500ms' }}
            />
            <div
              className={`absolute top-[57%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[50%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1600ms' }}
            />
            <div
              className={`absolute top-[64%] left-[35%] h-[3px] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[50%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1700ms' }}
            />
          </div>

          {/* Letter G - 5 concentric semi-circles + 4 vertical lines on right */}
          <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-56">
            {/* Arc 1 - outermost */}
            <div
              className={`absolute top-0 left-0 w-full h-full border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '1850ms'
              }}
            />
            {/* Arc 2 */}
            <div
              className={`absolute top-[4.5%] left-[4.5%] w-[91%] h-[91%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '1950ms'
              }}
            />
            {/* Arc 3 */}
            <div
              className={`absolute top-[9%] left-[9%] w-[82%] h-[82%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2050ms'
              }}
            />
            {/* Arc 4 */}
            <div
              className={`absolute top-[13.5%] left-[13.5%] w-[73%] h-[73%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2150ms'
              }}
            />
            {/* Arc 5 - innermost */}
            <div
              className={`absolute top-[18%] left-[18%] w-[64%] h-[64%] border-l-[3px] border-t-[3px] border-b-[3px] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2250ms'
              }}
            />

            {/* 4 Vertical lines on right side */}
            <div
              className={`absolute right-[5%] top-[50%] w-[3px] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2400ms' }}
            />
            <div
              className={`absolute right-[15%] top-[50%] w-[3px] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2500ms' }}
            />
            <div
              className={`absolute right-[25%] top-[50%] w-[3px] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2600ms' }}
            />
            <div
              className={`absolute right-[35%] top-[50%] w-[3px] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2700ms' }}
            />
          </div>
        </div>

        {/* Company name reveal - letter by letter with stagger */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-[#0a0a0a] tracking-[0.3em] overflow-hidden">
            {'COSMOS FINANCIAL GROUP'.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${3200 + i * 40}ms`,
                  marginRight: char === ' ' ? '0.5em' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline with line wipe effect */}
        <div className="text-center relative">
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-[#2596be] origin-center transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
            style={{ transitionDelay: '4200ms' }}
          />
          <p
            className={`text-sm sm:text-base text-[#525252] font-light tracking-[0.25em] uppercase pt-8 transition-all duration-1000 ease-out ${animate ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '4500ms' }}
          >
            An Avant-Garde FinServ Co.
          </p>
        </div>

        {/* Geometric accent lines - appearing last */}
        <div
          className={`absolute top-1/2 left-0 w-[2px] h-40 bg-gradient-to-b from-transparent via-[#2596be]/40 to-transparent transition-all duration-1200 ease-out ${animate ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '5000ms' }}
        />
        <div
          className={`absolute top-1/2 right-0 w-[2px] h-40 bg-gradient-to-b from-transparent via-[#2596be]/40 to-transparent transition-all duration-1200 ease-out ${animate ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '5000ms' }}
        />
      </section>
    </div>
  );
}
