import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Page6 = () => {
  const textRefs = useRef([]);
  const linkRefs = useRef([]);
  const heartRef = useRef(null);
  const mailRef = useRef(null);
  const instaRef = useRef(null);
  const linkedinRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Smooth entrance animations that maintain readability
    textRefs.current.forEach((el, index) => {
      if (el) {
        // Clean entrance animation
        gsap.fromTo(
          el,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            rotationX: -15
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              scroller: "body",
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Very subtle floating effect (slower movement)
        gsap.to(el, {
          y: -3,
          duration: 8 + index * 1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.5
        });
      }
    });

    // Gentle heart animation
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.15,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  })

  // SVG Icons
  const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );

  return (
    <div className='bg-zinc-800 text-white min-h-screen flex flex-col items-center justify-between p-8 relative overflow-hidden font-[kashh1] tracking-tight '>

      <div className="max-w-9xl mx-auto text-center relative z-10 space-x-12 flex-1 flex flex-col justify-center">
        {/* Main heading */}
        <div className="space-y-2 mb-8">
          <h1 
            ref={(el) => (textRefs.current[0] = el)}
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[10rem] font-bold text-white leading-tight"
          >
            you can get in touch
          </h1>
          
          <div 
            ref={(el) => (textRefs.current[1] = el)}
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[10rem] font-bold leading-tight"
          >
            <span className="text-white">with me via </span>
            <a 
              ref={(el) => {
                linkRefs.current[0] = el;
                mailRef.current = el;
              }}
              href="mailto:kashinathnelwade@gmail.com"
              className=" text-yellow-400 hover:text-yellow-300 transition-colors inline-block relative group"
            >
              <span className="link-text group-hover:opacity-0 transition-opacity duration-300">Mail</span>
              <span className="link-icon absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-32 h-32">
                  <MailIcon />
                </span>
              </span>
            </a>
            <span className="text-white"> or</span>
          </div>

          <div 
            ref={(el) => (textRefs.current[2] = el)}
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[10rem] font-bold leading-tight"
          >
            <a 
              ref={(el) => {
                linkRefs.current[1] = el;
                instaRef.current = el;
              }}
              href="https://www.instagram.com/kashinathnelwade/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors inline-block relative group"
            >
              <span className="link-text group-hover:opacity-0 transition-opacity duration-300">Instagram</span>
              <span className="link-icon absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-32 h-32">
                  <InstagramIcon />
                </span>
              </span>
            </a>
            <span className="text-white"> or </span>
            <a 
              ref={(el) => {
                linkRefs.current[2] = el;
                linkedinRef.current = el;
              }}
              href="https://www.linkedin.com/in/kashinath-nelwade/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-block relative group"
            >
              <span className="link-text group-hover:opacity-0 transition-opacity duration-300">LinkedIn</span>
              <span className="link-icon absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-32 h-32">
                  <LinkedInIcon />
                </span>
              </span>
            </a>
            <span className="text-white">.</span>
          </div>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-white text-xl md:text-2xl flex items-center justify-center gap-2 font-mono">
        crafted with 
        <span ref={heartRef} className="text-pink-500 text-3xl inline-block">
          ♥
        </span> 
        by me
      </p>
    </div>
  )
}

export default Page6