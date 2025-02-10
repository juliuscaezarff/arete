import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface StepFourProps {
  formData: {
    foundUs: string[]
    additionalInfo: string
  }
  handleCheckboxChange: (group: string, value: string) => void
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function StepFour({
  formData,
  handleCheckboxChange,
  handleChange
}: StepFourProps) {
  const foundUsOptions = [
    'Google',
    'Instagram',
    'Behance',
    'Indicação',
    'Outro'
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Como você nos encontrou?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {foundUsOptions.map(option => (
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
      <div>
        <Label
          htmlFor="additionalInfo"
          className="text-lg font-medium block mb-4"
        >
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
