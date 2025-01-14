import Ripple from './ripple'

interface Deliverable {
  id: string
  number: string
  title: string
  description: string
}

const deliverables: Deliverable[] = [
  {
    id: '1',
    number: '01',
    title: 'Estratégia Digital',
    description:
      'Desenvolvimento de estratégias personalizadas para alcançar seus objetivos de negócio.'
  },
  {
    id: '2',
    number: '02',
    title: 'Design UI/UX',
    description:
      'Criação de interfaces intuitivas e experiências de usuário memoráveis.'
  },
  {
    id: '3',
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Implementação técnica com as melhores práticas e tecnologias modernas.'
  },
  {
    id: '4',
    number: '04',
    title: 'Suporte Contínuo',
    description:
      'Acompanhamento e manutenção para garantir o sucesso a longo prazo.'
  }
]

export function DeliverablesSection() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-40 gap-y-20 max-w-6xl mx-auto">
          {deliverables.map(item => (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl border border-[#444444] group"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border border-[#333333] bg-black flex items-center justify-center">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item.number}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Entregáveis
      </p>

      <Ripple
        className="absolute inset-0"
        mainCircleSize={300}
        numCircles={12}
      />
    </div>
  )
}
