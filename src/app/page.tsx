'use client'

import { useEffect } from 'react'
import StartPage from '@/components/ui/start-page'
import Lenis from 'lenis'

export default function Home() {
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
      <StartPage />
    </main>
  )
}
