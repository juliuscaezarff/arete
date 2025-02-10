import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="rounded-md border border-zinc-950/10 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 min-w-[650px]">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="w-[100px]">
            <Link href="/" className="">
              <Image
                src="/logo.svg"
                alt="logo"
                width={24}
                height={24}
                className="h-12 w-12"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Projetos
            </Link>
            {/* <Link
              href="/about"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Sobre
            </Link> */}
            <Link href='/contact'>
              <Button variant="outline" size="sm">
                Inicie seu projeto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
