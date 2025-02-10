'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProgressSteps } from './progress-steps'
import { ChevronLeft } from 'lucide-react'
import { StepOne } from './step-one'
import { StepTwo } from './step-two'
import { StepThree } from './step-three'
import { StepFour } from './step-four'

const TOTAL_STEPS = 4

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step One fields
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    instagram: '',
    // Step Two fields
    companySegment: '',
    yearsInMarket: '',
    position: '',
    products: '',
    projectObjective: '',
    visualItems: [] as string[],
    additionalItems: [] as string[],
    foundUs: [] as string[],
    additionalInfo: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const goToNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleCheckboxChange = (group: string, value: string) => {
    setFormData(prev => {
      const currentItems = prev[group as keyof typeof prev] as string[]

      // Se "Nenhum" for selecionado, limpa outros itens
      if (value === 'Nenhum') {
        return { ...prev, [group]: ['Nenhum'] }
      }

      // Se outro item for selecionado e "Nenhum" estava marcado, remove "Nenhum"
      const newItems = currentItems.includes(value)
        ? currentItems.filter(item => item !== value)
        : [...currentItems.filter(item => item !== 'Nenhum'), value]

      return { ...prev, [group]: newItems }
    })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} />
      case 2:
        return <StepTwo formData={formData} handleChange={handleChange} />
      case 3:
        return (
          <StepThree
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
          />
        )
      case 4:
        return (
          <StepFour
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleChange={handleChange}
          />
        )
      default:
        return (
          <p className="text-lg text-muted-foreground">
            Step {currentStep} Content
          </p>
        )
    }
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardContent className="pt-6">
          <ProgressSteps currentStep={currentStep} totalSteps={TOTAL_STEPS} />

          <div className="mt-8 min-h-[200px] border rounded-lg p-4">
            <div className="mt-8">{renderStepContent()}</div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button onClick={goToNextStep} disabled={currentStep === TOTAL_STEPS}>
            {currentStep === TOTAL_STEPS ? 'Finish' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
