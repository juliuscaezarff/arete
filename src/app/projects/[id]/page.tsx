import { projects } from '@/lib/projects-data'
import { ProjectDetails } from '../_components/project-details'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map(project => ({
    id: project.id.toString()
  }))
}

export default async function ProjectPage({
  params
}: {
  params: { id: string }
}) {
  // Aguarda os parâmetros
  const id = await params.id
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    notFound()
  }

  return <ProjectDetails project={project} />
}
