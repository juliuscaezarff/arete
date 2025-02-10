export interface Project {
  id: number
  title: string
  coverImage: string // Primeira imagem (hero)
  category: string
  location: string
  year: string
  description: string
  gallery?: string[] // Array opcional de imagens adicionais
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Edvanio Barbershop',
    coverImage: '/projects/edvanio/cover.png',
    category: 'Barbearia',
    location: 'Minas Gerais, Brasil',
    year: '2023',
    description:
      'Edvanio Barbershop é uma barbearia com foco em autoestima masculina no quesito de corte, barba, sobrancelha, barboterapia e venda de produtos premium. A Barbearia leva o nome do proprietário da marca, um nome único! Edvanio começou suas atividades em 2012 e abriu sua barbearia em 2016 onde começou com o nome de Studio E após um longo tempo ele decidiu que iria alavancar sua empresa e então após vários cursos e especializações ele abriu a Edvanio Barbershop e nos procurou para desenvolver sua nova Identidade Visual com intuito de ser Líder, Exclusiva e Acadêmica.',
    gallery: [
      '/projects/edvanio/img1.png',
      '/projects/edvanio/img2.png',
      '/projects/edvanio/img3.png'
      // ... mais imagens se necessário
    ]
  },
  {
    id: 2,
    title: 'Vila Verde',
    coverImage: '/projects/vila-verde/img1.png',
    category: 'Barbearia',
    location: 'Minas Gerais, Brasil',
    year: '2023',
    description:
      'Edvanio Barbershop é uma barbearia com foco em autoestima masculina no quesito de corte, barba, sobrancelha, barboterapia e venda de produtos premium. A Barbearia leva o nome do proprietário da marca, um nome único! Edvanio começou suas atividades em 2012 e abriu sua barbearia em 2016 onde começou com o nome de Studio E após um longo tempo ele decidiu que iria alavancar sua empresa e então após vários cursos e especializações ele abriu a Edvanio Barbershop e nos procurou para desenvolver sua nova Identidade Visual com intuito de ser Líder, Exclusiva e Acadêmica.',
    gallery: [
      '/projects/vila-verde/img2.png',
      '/projects/vila-verde/img3.png',
      '/projects/vila-verde/img4.png',
      '/projects/vila-verde/img5.png',
      '/projects/vila-verde/img6.png',
      '/projects/vila-verde/img7.png'
      // ... mais imagens se necessário
    ]
  }
]
