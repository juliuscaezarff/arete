import Image from 'next/image'
import { Card, CardContent } from './card'
import { Separator } from './separator'
import { Button } from './button'

interface Project {
  id: number
  title: string
  image: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Eduardo Barbershop',
    image: '/barba-de-corte-de-homem-bonito-em-um-salao-de-barbeiro.png',
    year: '2023'
  },
  {
    id: 2,
    title: 'Vila Verde',
    image: '/Free_Tote_Bag_Mockup_1 2.png',
    year: '2024'
  },
  {
    id: 3,
    title: 'X Química',
    image: '/Letterhead and Business Card Mockup 1.png',
    year: '2024'
  },
  {
    id: 4,
    title: 'Belvedere Nail',
    image: '/ToteBag-AnagramDesign 1.png',
    year: '2024'
  },
  {
    id: 5,
    title: 'Vitatic - Polimentos',
    image: '/CardBmck 1.png',
    year: '2024'
  },
  {
    id: 6,
    title: 'Vila Verde',
    image: '/ToteBag-AnagramDesign 1.png',
    year: '2024'
  }
]

export function ProjectsSection() {
  return (
    <div className="w-full sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="w-full mb-5">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-light tracking-wide text-white">
                    {project.title}
                  </h2>
                  <Separator className="bg-muted-foreground/30" />
                  <div className="space-y-1 text-sm text-muted-foreground uppercase tracking-wider">
                    <p>PROJETO</p>
                    <div className="flex justify-between items-center">
                      <p>SETOR: DESIGN</p>
                      <p>{project.year}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 sm:mt-24 lg:mt-32">
        <Button variant="outline" size="lg">
          Mais projetos
        </Button>
      </div>
    </div>
  )
}
