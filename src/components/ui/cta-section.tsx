import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { Container } from './craft'

export function CTASection() {
  return (
    <Container>
      <section className="">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Ícone/Logo */}
            <div className="w-32 md:w-48">
              <Image
                src="/asterisk-3d.png" // Ajuste o caminho para sua imagem
                alt="Asterisco 3D"
                width={192}
                height={192}
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl text-white">
                Pronto para elevar sua identidade visual para o próximo nível?
              </h2>

              <p className="text-zinc-400 max-w-2xl">
                Preencha a solicitação para que possamos entender seus objetivos
                e desafios e em seguida marcarmos uma conversa para alinhar as
                expectativas.
              </p>

              <p className="text-zinc-400">
                Se preferir, fique à vontade para enviar um e-mail para:{' '}
                <a
                  href="mailto:studioarete@gmail.com"
                  className="text-white hover:text-zinc-300 transition-colors"
                >
                  studioarete@gmail.com
                </a>
              </p>

              <div className="pt-4">
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Solicitar Proposta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
