import { ArrowDown } from 'lucide-react'
import { MultiStepForm } from './_components/multi-step-form'

export default function Contact() {
  return (
    <main className="bg-black text-white mb-10">
      <section className="container mx-auto px-4 pt-36">
        <div className="max-w-3xl mx-auto">
          {/* Texto introdutório */}
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight max-w-2xl mx-auto">
              Formulário para Proposta de Investimento
            </h1>
            <p className="text-lg font-light max-w-lg mx-auto text-zinc-400">
              este é o primeiro passo para entender melhor sobre os desafios e
              objetivos do projeto, bora?
            </p>
            <div className="mt-12 flex items-center justify-center ">
              <ArrowDown size={24} className="text-zinc-500 border rounded-full" />
            </div>
          </div>

          {/* Form */}
          <MultiStepForm />
        </div>
      </section>
    </main>
  )
}
