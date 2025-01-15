import { Container, Section } from './craft'
import { DeliverablesSection } from './deliverables-section'
import { InfiniteSliderBasic } from './enterprises-section'
import { MethodologySection } from './methodology-section'
import { ProjectsSection } from './projects-section'
import { TeamSection } from './team-section'

export default function StartPage() {
  return (
    <Section>
      <Container>
        <ProjectsSection />
        <InfiniteSliderBasic />
        <MethodologySection />
        <DeliverablesSection />
        <TeamSection />
      </Container>
    </Section>
  )
}
