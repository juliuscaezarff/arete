import React, { useEffect, useRef } from 'react'
import { words } from './data'
import { introAnimation, collapseWords, progressAnimation } from './animation'

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const progressNumberRef = useRef(null)
  const wordGroupsRef = useRef(null)

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), '-=1')
  }, [timeline])

  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden">
      {/* Progress Bar Container */}
      <div className="absolute bottom-0 left-0 h-[5vh] w-full z-[3]">
        <div
          ref={progressRef}
          className="h-full w-full bg-black origin-left scale-x-0"
        />
        <span
          ref={progressNumberRef}
          className="absolute -left-[5vw] top-1/2 -translate-y-1/2 z-[4] whitespace-nowrap text-white text-[3.2rem]"
        >
          0
        </span>
      </div>

      {/* Loader Main Container */}
      <div
        ref={loaderRef}
        className="flex h-full w-full flex-col items-center justify-center bg-white overflow-hidden z-[2] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
      >
        {/* Words Container */}
        <div className="relative overflow-hidden h-[41.8rem]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 h-full z-[2] bg-gradient-to-b from-white/90 via-transparent to-white/90" />

          {/* Words Group */}
          <div ref={wordGroupsRef} className="relative">
            {words.map((word, index) => (
              <span key={index} className="block text-[3.2rem]">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
