'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { animateTitle, animateImage, revealMenu } from './animation'

const Hero = () => {
  const timeline = useRef(gsap.timeline())
  const heroRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0)
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <section
    ref={heroRef}
    className="relative h-screen flex flex-col justify-center bg-black"
  >
    <div className="relative w-full">
      <h1 className="w-[calc(100%-8rem)] mx-16 grid grid-cols-[max-content_1fr_max-content] items-center gap-[3.2rem]">
        <span data-hidden data-title-first className="text-white text-[200px] font-light leading-none">
          Aretê
        </span>
        <span
          data-hero-line
          className="inline-block h-[0.1rem] w-full bg-white origin-center scale-x-0"
        />
        <span data-hidden data-title-last className="text-white text-[200px] font-light leading-none">
          studio
        </span>
      </h1>

      {/* Container para texto e seta */}
      <div className="absolute right-16 flex flex-col items-end gap-8" data-hidden>
        <p className="text-white/80 text-base max-w-[280px] text-right mt-8 tracking-normal">
          Transformando ideias em experiências digitais memoráveis. 
          Combinamos design estratégico e tecnologia para criar soluções 
          que impactam e conectam.
        </p>
        
        <div 
          className="cursor-pointer animate-bounce"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
            stroke="currentColor" 
            strokeWidth="1"
          >
            <path 
              d="M12 5v14M5 12l7 7 7-7" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
