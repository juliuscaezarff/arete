"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
    <div className="container flex flex-col items-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Transforme sua marca
          <br />
          em líder de mercado
        </h1>
        <p className="text-lg font-light sm:text-xl md:text-2xl">é agora ou nunca!</p>
      </div>
      <div className="h-[110px]" />
      <div className="transition-opacity duration-700" style={{ opacity: isVisible ? 1 : 0.3 }}>
        <ArrowDown size={24} />
      </div>
    </div>
  </section>
  )
}

