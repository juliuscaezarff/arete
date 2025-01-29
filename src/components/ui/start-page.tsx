import { Container, Section } from './craft'
import { DeliverablesSection } from './deliverables-section'
import { InfiniteSliderBasic } from './enterprises-section'
import Hero from './hero'
import { MethodologySection } from './methodology-section'
import { ProjectsSection } from './projects-section'
import { TeamSection } from './team-section'

export default function StartPage() {
  return (
    <Section>
      <Hero />
      <ProjectsSection />
      <Container>
        <InfiniteSliderBasic />
        <MethodologySection />
        <DeliverablesSection />
        <TeamSection />
      </Container>
    </Section>
  )
}
