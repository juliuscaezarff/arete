import Image from "next/image"
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

interface SocialLink {
  platform: string
  url: string
}

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
  socialLinks: SocialLink[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Gustavo Gutemberg",
    role: "Diretor de Arte / Designer Gráfico",
    description: "Olá, meu nome é Gustavo, sou fundador do Studio Aretê e designer gráfico há 5 anos. Durante minha jornada profissional, tenho me dedicado a entender profundamente o mercado e suas constantes transformações. Acredito que o design é uma poderosa ferramenta estratégica, e minha missão é transformar ideias em soluções visuais impactantes e funcionais. Encaro cada projeto como uma oportunidade de superar desafios, trazer resultados expressivos para meus clientes e continuar evoluindo como profissional.",
    image: "/perfil-gustavo.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com/joaosilva" },
      { platform: "linkedin", url: "https://linkedin.com/in/joaosilva" },
      { platform: "instagram", url: "https://instagram.com/joaosilva" }
    ]
  },
  {
    id: 2,
    name: "Julius Ceasar",
    role: "Design Engineer",
    description: "Olá, meu nome é Maria, sou desenvolvedora full-stack no Studio Aretê há 3 anos. Minha paixão por tecnologia e inovação me impulsiona a buscar constantemente novas soluções e aprimorar minhas habilidades. Acredito que o desenvolvimento web vai além do código; é sobre criar experiências intuitivas e impactantes para os usuários. Meu objetivo é combinar criatividade e técnica para transformar conceitos em realidade digital, sempre focando na performance e na usabilidade.",
    image: "/perfil-julius.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com/mariasantos" },
      { platform: "linkedin", url: "https://linkedin.com/in/mariasantos" },
      { platform: "instagram", url: "https://instagram.com/mariasantos" }
    ]
  }
]

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'twitter':
      return <Twitter className="w-5 h-5" />
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />
    case 'instagram':
      return <Instagram className="w-5 h-5" />
    default:
      return null
  }
}

export function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-5xl font-medium tracking-tighter text-center text-white">
            Time
          </h2>
        </div>
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-[200px] relative flex-shrink-0">
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#f3e6d8] rounded-lg" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover w-full h-auto relative z-10"
                />
              </div>
              <div className="w-full md:flex-1 p-6 flex flex-col justify-start">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#555555] font-medium mb-4">{member.role}</p>
                <p className="text-[#555555] mb-6">{member.description}</p>
                <div className="flex gap-4 mt-auto">
                  {member.socialLinks.map((link) => (
                    <Link 
                      key={link.platform} 
                      href={link.url}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <SocialIcon platform={link.platform} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

