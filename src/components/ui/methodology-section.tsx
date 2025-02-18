import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Image from 'next/image'

interface Methodology {
  id: string
  number: string
  title: string
  content: string
  icon: string
}

const methodologies: Methodology[] = [
  {
    id: 'item-1',
    number: '01',
    title: 'Análise',
    content: 'Nossa metodologia de estúdio envolve...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-2',
    number: '02',
    title: 'Estratégia',
    content: 'Como agência, nós focamos em...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-3',
    number: '03',
    title: 'Direcionamento Visual',
    content: 'Sobre nossa metodologia...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-4',
    number: '04',
    title: 'Logotipo',
    content: 'Nossa forma de comunicação...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-5',
    number: '05',
    title: ' Identidade Visual',
    content: 'Nossa forma de comunicação...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-6',
    number: '06',
    title: 'Apresentação',
    content: 'Nossa forma de comunicação...',
    icon: '/bg-gradient.jpeg'
  },
  {
    id: 'item-7',
    number: '07',
    title: 'Entrega',
    content: 'Nossa forma de comunicação...',
    icon: '/bg-gradient.jpeg'
  }
]

export function MethodologySection() {
  return (
    <section className="w-full py-12 mt-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-5xl font-medium tracking-tighter text-white">
            Metodologias
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mx-auto ">
          {methodologies.map(item => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-t border-[#444444]"
            >
              <AccordionTrigger className="flex items-center justify-between py-6 hover:no-underline [&>svg]:hidden">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-medium text-white">
                    {item.number}
                  </span>
                  <span className="text-xl font-medium text-white">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <Image
                    src={item.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="object-cover rounded-lg"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 text-white">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
