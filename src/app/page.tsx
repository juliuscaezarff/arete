'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import StartPage from '@/components/ui/start-page'
import Preloader from '@/components/preloader'
import Hero from '@/components/hero'
import { gsap } from 'gsap'
import { useLoader } from '@/lib/loader-provider'
import Lenis from 'lenis'

export default function Home() {
  const { loaderFinished, setLoaderFinished } = useLoader()
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true)
      })
      setTimeline(tl)
    })
    return () => context.revert()
  }, [setLoaderFinished])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      {loaderFinished ? (
        <>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
          </div>
          <StartPage />
        </>
      ) : (
        <Preloader timeline={timeline} />
      )}
    </main>
  )
}
