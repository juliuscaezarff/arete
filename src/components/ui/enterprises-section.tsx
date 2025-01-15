import Image from 'next/image'
import { InfiniteSlider } from './infinite-slider'

export function InfiniteSliderBasic() {
  return (
    <div className="flex items-center justify-center py-12 mt-32">
      <div className="container">
        <div className="max-w-[1000px] mx-auto w-full py-8 md:py-16">
          <h2 className="text-5xl font-medium tracking-tighter text-white mb-16">
            Empresas parceiras
          </h2>

          <div className="max-w-[670px] mx-auto">
            <InfiniteSlider gap={100} reverse>
              <Image
                src="/ethereum-logo.svg"
                alt="Apple Music logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              <Image
                src="/google-icon.svg"
                alt="Chrome logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              <Image
                src="/nasa-logo.svg"
                alt="Strava logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              <Image
                src="/nike-logo.svg"
                alt="Nintendo logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              <Image
                src="/nokia-logo.svg"
                alt="Jquery logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              <Image
                src="/telegram-logo.svg"
                alt="Prada logo"
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  )
}
