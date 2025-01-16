import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'
import { Button } from './button'
import { HomeIcon } from './home-icon'
import { WorkflowIcon } from './workflow-icon'
import { LayersIcon } from './layers'

const linkStyles =
  'relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors   focus-visible:ring-2 active:scale-[0.98]'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="rounded-md border border-zinc-950/10 bg-[#111111]">
        <div className="px-3 py-3 flex items-center space-x-6">
          <Link href="/" className="">
            <Image
              src="/logo.svg"
              alt="logo"
              width={24}
              height={24}
              className="h-12 w-12"
            />
          </Link>

          <div className="flex space-x-4 items-center">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href="/" className={linkStyles}>
                  <HomeIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href="/projects" className={linkStyles}>
                  <WorkflowIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Contato</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href="/about" className={linkStyles}>
                  <LayersIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Projetos</p>
              </TooltipContent>
            </Tooltip>

            <Button variant="outline" className="ml-4">
              Inicie seu projeto
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
