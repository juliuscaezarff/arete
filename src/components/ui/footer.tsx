import Link from "next/link"
import { Instagram, DribbbleIcon as Behance } from 'lucide-react'
import Image from "next/image"
import { Container } from "./craft"

export function Footer() {
  return (
   <Container>
     <footer className="w-full py-6 border-t relative">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/" className="font-semibold">
            <Image src={"/logo.svg"} alt="logo" width={60} height={60}/>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="text-white hover:text-gray-900">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://behance.net" className="text-white hover:text-gray-900">
              <Behance className="h-5 w-5" />
              <span className="sr-only">Behance</span>
            </Link>
            {/* <Link href="/info" className="text-white hover:text-gray-900">
              <Info className="h-5 w-5" />
              <span className="sr-only">Information</span>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
   </Container>
  )
}

