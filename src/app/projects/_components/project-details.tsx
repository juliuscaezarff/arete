import Image from 'next/image'
import { Project } from '@/lib/projects-data'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <main className="bg-black text-white">
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Primeira Imagem */}
          <div className="relative aspect-[16/9] w-full mb-24">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl mb-12">{project.title}</h1>
            
            <div className="space-y-12">
              {/* Sobre o projeto */}
              <div>
                <h2 className="text-xl mb-4">Sobre o projeto</h2>
                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Informações Técnicas */}
              <div>
                <h2 className="text-xl mb-4">Inf. Técnicas</h2>
                <div className="grid grid-cols-3 gap-8 text-zinc-400">
                  <div>
                    <p>Categoria: {project.category}</p>
                  </div>
                  <div>
                    <p>País: {project.location}</p>
                  </div>
                  <div>
                    <p>Ano: {project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-24">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[16/9] w-full"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}