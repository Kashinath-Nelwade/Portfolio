import React, { useRef, useState } from 'react'
import Page1Bottom from '../assets/components/Page1Bottom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TiltText from '../assets/components/TiltText';

const Page1 = () => {
  const [xVAl, setxVAl] = useState(0);
  const [yVal, setyVal] = useState(0);

  const tiltRef = useRef(null);

  const mouseMoving = (e) => {
    setxVAl(
      (e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 50
    );
    setyVal(
      -(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20
    );
  };

  const HandleMouseLeave = () => {
    setxVAl(0);
    setyVal(0);
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVAl}deg)`,
      duration: 2,
      ease: "elastic.out(1,0.1)",
    });
  }, [xVAl, yVal]);

  return (
    <div
      onMouseMove={(e) => mouseMoving(e)}
      onMouseLeave={HandleMouseLeave}
      className="h-screen bg-gradient-to-l from-[#161719] to-[#222323]  flex justify-center items-center px-4 sm:px-6 md:px-5 py-5 sm:py-6 md:py-5  overflow-x-hidden"
    >
      <div
        id="page1"
        className="w-full h-full relative rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-[0_0_20px_rgba(0,0,0,0.5)] text-white bg-[url(./assets/components/kashinathimg.png)] bg-cover bg-center grayscale-25 " 
      >
        {/* Logo and Portfolio Text */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 py-6 sm:py-10">
          <i className="ri-kick-fill text-4xl sm:text-6xl md:text-6xl"></i>
          <div className="text-white font-bold tracking-wider">
            <span className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-[kashh] uppercase opacity-90 hover:opacity-100 transition-opacity duration-300">
              Portfolio
            </span>
          </div>
        </div>

        {/* Tilted Text */}
        <div
          ref={tiltRef}
          className="absolute right-6 top-1/5 -translate-y-1/2">
          <TiltText />
        </div>

        {/* Bottom Section */}
        {/* <Page1Bottom /> */}
      </div>
    </div>
  );
};

export default Page1;
