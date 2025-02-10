import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type React from 'react'

interface StepOneProps {
  formData: {
    name: string
    email: string
    phone: string
    companyName: string
    website: string
    instagram: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StepOne({ formData, handleChange }: StepOneProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
        />
      </div>
      <div>
        <Label htmlFor="phone">Número de Telefone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
        />
      </div>
      <div>
        <Label htmlFor="companyName">Nome da Empresa</Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Nome da sua empresa"
        />
      </div>
      <div>
        <Label htmlFor="website">Site da Empresa</Label>
        <Input
          id="website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://www.suaempresa.com"
        />
      </div>
      <div>
        <Label htmlFor="instagram">Instagram da Empresa</Label>
        <Input
          id="instagram"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          placeholder="@suaempresa"
        />
      </div>
    </div>
  )
}
