import type React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface StepTwoProps {
  formData: {
    companySegment: string
    yearsInMarket: string
    position: string
    products: string
    projectObjective: string
  }
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export function StepTwo({ formData, handleChange }: StepTwoProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="companySegment">Segmento da empresa</Label>
        <Input
          id="companySegment"
          name="companySegment"
          value={formData.companySegment}
          onChange={handleChange}
          placeholder="Ex: Tecnologia, Saúde, Educação"
        />
      </div>
      <div>
        <Label htmlFor="yearsInMarket">Quanto tempo de mercado</Label>
        <Input
          id="yearsInMarket"
          name="yearsInMarket"
          value={formData.yearsInMarket}
          onChange={handleChange}
          placeholder="Ex: 5 anos"
        />
      </div>
      <div>
        <Label htmlFor="position">Qual seu cargo na empresa</Label>
        <Input
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Ex: Gerente de Marketing"
        />
      </div>
      <div>
        <Label htmlFor="products">Quais produtos sua empresa oferece</Label>
        <Textarea
          id="products"
          name="products"
          value={formData.products}
          onChange={handleChange}
          placeholder="Liste os principais produtos ou serviços da sua empresa"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="projectObjective">
          Por que precisa desse projeto, qual objetivo
        </Label>
        <Textarea
          id="projectObjective"
          name="projectObjective"
          value={formData.projectObjective}
          onChange={handleChange}
          placeholder="Descreva o objetivo principal deste projeto e como ele ajudará sua empresa"
          rows={4}
        />
      </div>
    </div>
  )
}
