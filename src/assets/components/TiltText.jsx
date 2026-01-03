import React from 'react'

const TiltText = (props) => {

  return (
    
    <div
      id="tilt"
      ref={props.abc}
      className="mt-6 sm:mt-10 md:mt-14 px-4 text-center md:text-left ml-6 sm:ml-10 md:ml-14"
    >
      {/* Top Subtitle */}
      <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-bold tracking-wider">
        Building thoughtful software, not just features
      </h2>

      {/* Main Heading */}
      <h1 className="font-[kashh] leading-[clamp(3rem,12vw,15rem)] text-[clamp(2.5rem,12vw,14rem)]">
       Kashinath Nelwade
      </h1>

      {/* Bottom Subtitle */}
      <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-bold">
       Driven by curiosity, powered by code, focused on real-world impact.
      </h2>
    </div>
  )
}

export default TiltText
