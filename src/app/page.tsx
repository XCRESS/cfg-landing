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
        <div className="flex items-center justify-center gap-[clamp(1rem,3vw,2rem)] mb-[clamp(3rem,8vh,4rem)]">

          {/* Letter C - 5 concentric arcs with drawing animation */}
          <div className="relative w-[clamp(5rem,12vw,11rem)] h-[clamp(6.5rem,15vw,14rem)]">
            {/* Arc 1 - outermost */}
            <div
              className={`absolute top-0 left-0 w-full h-full border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '200ms'
              }}
            />
            {/* Arc 2 */}
            <div
              className={`absolute top-[6%] left-[6%] w-[88%] h-[88%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '300ms'
              }}
            />
            {/* Arc 3 */}
            <div
              className={`absolute top-[12%] left-[12%] w-[76%] h-[76%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '400ms'
              }}
            />
            {/* Arc 4 */}
            <div
              className={`absolute top-[18%] left-[18%] w-[64%] h-[64%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '500ms'
              }}
            />
            {/* Arc 5 - innermost */}
            <div
              className={`absolute top-[24%] left-[24%] w-[52%] h-[52%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '600ms'
              }}
            />
          </div>

          {/* Letter F - 4 vertical lines + 6 horizontal lines (3 top, 3 middle) */}
          <div className="relative w-[clamp(4.5rem,10vw,9rem)] h-[clamp(6.5rem,15vw,14rem)]">
            {/* 4 Vertical lines - closer spacing */}
            <div
              className={`absolute left-[5%] top-0 w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '750ms' }}
            />
            <div
              className={`absolute left-[12%] top-0 w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '850ms' }}
            />
            <div
              className={`absolute left-[19%] top-0 w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '950ms' }}
            />
            <div
              className={`absolute left-[26%] top-0 w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '1050ms' }}
            />

            {/* 3 Horizontal lines at top - starting from top */}
            <div
              className={`absolute top-0 left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[74%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}
            />
            <div
              className={`absolute top-[7%] left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[74%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1300ms' }}
            />
            <div
              className={`absolute top-[14%] left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[74%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1400ms' }}
            />

            {/* 3 Horizontal lines at middle - shorter */}
            <div
              className={`absolute top-[50%] left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[55%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1500ms' }}
            />
            <div
              className={`absolute top-[57%] left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[55%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1600ms' }}
            />
            <div
              className={`absolute top-[64%] left-[26%] h-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'w-[55%] opacity-100' : 'w-0 opacity-0'}`}
              style={{ transitionDelay: '1700ms' }}
            />
          </div>

          {/* Letter G - 5 concentric semi-circles + 4 vertical lines on right */}
          <div className="relative w-[clamp(5rem,12vw,11rem)] h-[clamp(6.5rem,15vw,14rem)]">
            {/* Arc 1 - outermost */}
            <div
              className={`absolute top-0 left-0 w-full h-full border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '1850ms'
              }}
            />
            {/* Arc 2 */}
            <div
              className={`absolute top-[6%] left-[6%] w-[88%] h-[88%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '1950ms'
              }}
            />
            {/* Arc 3 */}
            <div
              className={`absolute top-[12%] left-[12%] w-[76%] h-[76%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2050ms'
              }}
            />
            {/* Arc 4 */}
            <div
              className={`absolute top-[18%] left-[18%] w-[64%] h-[64%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2150ms'
              }}
            />
            {/* Arc 5 - innermost */}
            <div
              className={`absolute top-[24%] left-[24%] w-[52%] h-[52%] border-l-[clamp(2px,0.25vw,3px)] border-t-[clamp(2px,0.25vw,3px)] border-b-[clamp(2px,0.25vw,3px)] border-[#2596be] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                borderRadius: '50% 0 0 50%',
                transitionDelay: '2250ms'
              }}
            />

            {/* 4 Vertical lines on right side */}
            <div
              className={`absolute right-[5%] top-[50%] w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2400ms' }}
            />
            <div
              className={`absolute right-[15%] top-[50%] w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2500ms' }}
            />
            <div
              className={`absolute right-[25%] top-[50%] w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2600ms' }}
            />
            <div
              className={`absolute right-[35%] top-[50%] w-[clamp(2px,0.25vw,3px)] bg-[#2596be] origin-top transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animate ? 'h-[35%] opacity-100' : 'h-0 opacity-0'}`}
              style={{ transitionDelay: '2700ms' }}
            />
          </div>
        </div>

        {/* Company name reveal - letter by letter with stagger */}
        <div className="text-center mb-8 px-2 sm:px-4">
          <h1 className="text-[clamp(1rem,4vw,4rem)] font-light text-[#0a0a0a] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] overflow-hidden">
            <span className="inline-block whitespace-nowrap">
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
            </span>
          </h1>
        </div>

      </section>
    </div>
  );
}
