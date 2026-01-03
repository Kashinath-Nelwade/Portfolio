import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Page1Bottom = () => {
  const spinRef = useRef(null);

  useGSAP(() => {
    gsap.to(spinRef.current, {
      rotate: 360,   
      duration: 20,  
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="absolute left-0 bottom-0 w-full flex items-end justify-end px-4 sm:px-6 md:px-10 lg:px-10 py-8">
      <div>
        <img
          ref={spinRef}
          className="w-[50px] sm:w-[70px] md:w-[90px] lg:w-[120px] h-auto max-w-full"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt="Spinning logo"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
