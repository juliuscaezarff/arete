import Image from 'next/image'
import Link from 'next/link'

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
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map(project => (
            <Link
              key={project.id}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">{project.year}</p>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
