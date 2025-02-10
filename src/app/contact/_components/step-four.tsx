import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface StepFourProps {
  formData: {
    foundUs: string[]
    investmentRange: string[]
    customInvestment: string
    additionalInfo: string
  }
  handleCheckboxChange: (group: string, value: string) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function StepFour({ formData, handleCheckboxChange, handleChange }: StepFourProps) {
  const foundUsOptions = [
    "Google",
    "Instagram",
    "Behance",
    "Indicação",
    "Outro"
  ]

  const investmentOptions = [
    "De 3 a 5 Mil Reais",
    "De 5 a 10 Mil",
    "De 10 a 15 Mil",
    "+ de 15 mil",
    "Outro"
  ]

  const showCustomInput = formData.investmentRange.includes("Outro")

  return (
    <div className="space-y-8">
      {/* Como nos encontrou */}
      <div>
        <h3 className="text-lg font-medium mb-4">
          Como você nos encontrou?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {foundUsOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`found-${option}`}
                checked={formData.foundUs.includes(option)}
                onCheckedChange={() => handleCheckboxChange('foundUs', option)}
              />
              <Label
                htmlFor={`found-${option}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Investimento */}
      <div>
        <h3 className="text-lg font-medium mb-4">
          Quanto você quer investir nesse projeto?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {investmentOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`investment-${option}`}
                checked={formData.investmentRange.includes(option)}
                onCheckedChange={() => handleCheckboxChange('investmentRange', option)}
              />
              <Label
                htmlFor={`investment-${option}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>

        {/* Campo customizado para "Outro" valor */}
        {showCustomInput && (
          <div className="mt-4">
            <Label htmlFor="customInvestment">Qual valor você pretende investir?</Label>
            <Input
              id="customInvestment"
              name="customInvestment"
              value={formData.customInvestment}
              onChange={handleChange}
              placeholder="Digite o valor pretendido"
              className="max-w-xs"
            />
          </div>
        )}
      </div>

      {/* Informações adicionais */}
      <div>
        <Label htmlFor="additionalInfo" className="text-lg font-medium block mb-4">
          Tem algo mais a dizer?
        </Label>
        <Textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="min-h-[150px]"
          placeholder="Fique à vontade para contribuir com mais informações"
        />
      </div>
    </div>
  )
}