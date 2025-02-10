import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface StepThreeProps {
  formData: {
    visualItems: string[]
    additionalItems: string[]
  }
  handleCheckboxChange: (group: string, value: string) => void
}

export function StepThree({ formData, handleCheckboxChange }: StepThreeProps) {
  const visualItems = [
    'Cartão de Visitas',
    'Cartão de Visitas digital',
    'Template de post para instagram',
    'Uniforme',
    'Capa para Facebook',
    'Assinatura de E-mail',
    'Papel Timbrado',
    'Pasta A4',
    'Crachá',
    'Adesivo',
    'Sacola',
    'Envelope',
    'Brindes',
    'Nenhum',
    'Outro'
  ]

  const additionalItems = [
    'Naming',
    'Motion',
    '3D',
    'Ilustração',
    'Outro',
    'Nenhum'
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">
          Marque os itens adicionais que você deseja na sua identidade visual
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visualItems.map(item => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`visual-${item}`}
                checked={formData.visualItems.includes(item)}
                onCheckedChange={() =>
                  handleCheckboxChange('visualItems', item)
                }
              />
              <Label
                htmlFor={`visual-${item}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Quais adicionais você precisa para esse projeto?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {additionalItems.map(item => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`additional-${item}`}
                checked={formData.additionalItems.includes(item)}
                onCheckedChange={() =>
                  handleCheckboxChange('additionalItems', item)
                }
              />
              <Label
                htmlFor={`additional-${item}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
