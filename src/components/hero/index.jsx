'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { animateTitle, animateImage, revealMenu } from './animation'
import { Button } from '../ui/button'
import { Metrics } from '../ui/metrics'

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
    <section ref={heroRef} className="relative h-screen flex flex-col bg-black">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex items-center">
          <h1 className="w-[calc(100%-2rem)] sm:w-[calc(100%-8rem)] mx-4 sm:mx-16 grid grid-cols-[max-content_1fr_max-content] items-center gap-4 sm:gap-[3.2rem]">
            <span
              data-hidden
              data-title-first
              className="text-white text-[12vw] lg:text-[200px] font-light leading-none"
            >
              Aretê
            </span>
            <span
              data-hero-line
              className="inline-block h-[0.1rem] w-full bg-white origin-center scale-x-0"
            />
            <span
              data-hidden
              data-title-last
              className="text-white text-[12vw] lg:text-[200px] font-light leading-none"
            >
              studio
            </span>
          </h1>
        </div>

        <div className="mx-4 sm:mx-16 mb-10 sm:mb-20">
          <div className="flex flex-col gap-12" data-hidden>
            <div className="flex flex-col items-start gap-8 w-full lg:w-[400px] lg:ml-auto">
              <p className="text-white/80 text-2xl sm:text-3xl w-full text-left tracking-normal">
                Transforme sua marca em líder de mercado
              </p>

              <div className="flex gap-4 w-full">
                <Button variant="outline" className="flex-1">
                  Fale conosco
                </Button>
                <Button className="flex-1">Projetos</Button>
              </div>
            </div>

            <div className="w-full lg:w-[500px] lg:absolute lg:bottom-20">
              <div className="flex flex-col gap-8">
                <Metrics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
