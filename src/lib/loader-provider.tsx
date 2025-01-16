'use client'

import { Footer } from '@/components/ui/footer'
import Header from '@/components/ui/navbar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext({
  loaderFinished: false,
  setLoaderFinished: (value: boolean) => {}
})

export function LoaderProvider({ children }: any) {
  const [loaderFinished, setLoaderFinished] = useState(false)

  return (
    <LoaderContext.Provider value={{ loaderFinished, setLoaderFinished }}>
    {loaderFinished && (
      <TooltipProvider>
        <Header />
      </TooltipProvider>
    )}
    {children}
    {loaderFinished && <Footer />}
  </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)