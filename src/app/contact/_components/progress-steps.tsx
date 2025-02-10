'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ProgressStepsProps {
  currentStep: number
  totalSteps?: number
}

export function ProgressSteps({
  currentStep = 1,
  totalSteps = 4
}: ProgressStepsProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative flex justify-between">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-muted" />
        <div
          className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-primary transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber <= currentStep

          return (
            <div key={index} className="relative z-10">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {isActive && stepNumber < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
