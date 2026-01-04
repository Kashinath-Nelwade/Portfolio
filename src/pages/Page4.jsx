import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page4 = () => {
  
  const titleRef = useRef(null)
  const specialCardRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
      //  Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -80,
        rotationX: -60,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          end: 'top 40%',
          scrub: true,
        },
      }
    )


    // Project cards animation
    gsap.utils.toArray(".project-card").forEach((el, index) => {
      gsap.from(el, {
        y: -80,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      })
    })


    gsap.utils.toArray(".project-card-bottom").forEach((el,index)=>{
    gsap.from(el, {
      x: 100,
      opacity:0,
      scale:0.8,
      duration:0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: el,
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    })
  })

  gsap.from(
    specialCardRef.current
    ,{
      y:-338,
      x:-660,
      delay:1,
      opacity:1,
      scale:0.2,
      duration:0.9,
      scrollTrigger:{
        trigger: specialCardRef.current,
        scroller: "body",
        start: "top 30%",
        end: "top -10%",
        scrub:true,
       
        
      }
    
  })


  })

  
  return (
    <div>
      <div  className="min-h-screen bg-[#242424] flex flex-col items-start px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-10 overflow-x-hidden">

        

        {/* Heading */}
        <div ref={titleRef} className="mb-16 sm:mb-20 md:mb-24 ">

          <h1  className="font-[kashh1] text-white font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight pl-30  ">
            Projects
          </h1>
          <h1  className=" text-white font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl pt-4 tracking-tight">
            Crafted with <span className="text-pink-400">love</span> 
          </h1>
          <p className="text-white   selection:bg-pink-400 sm:text-lg md:text-3xl tracking-tighter mt-8  py-2">
            these are few of my recent work
          </p>
        </div>

        {/* Project Cards Container */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-10 gap w-full max-w-[1800px] py-10 mt-16 rounded-2xl sm:rounded-3xl md:rounded-[25px] shadow-black text-white bg-zinc-400 bg-cover bg-center"
        >

          {/* CARECODE */}
          <a
            href="https://carecodefinal.web.app"
            target="_blank"
            className="project-card group h-[280px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%] relative overflow-hidden shadow-black bg-gradient-to-l from-blue-200 to-blue-300 shadow-2xl"
          >
            <img
              src="/images/carecode.png"
              alt="Project"
              className="w-full h-full py-5 px-8 object-cover transition-transform duration-300 group-hover:scale-105 shadow-xl rounded-xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                View Project
              </span>
            </div>
          </a>

          {/* PREPPRO */}
          <a
            href="https://preppro-628s.onrender.com/"
            target="_blank"
            ref={specialCardRef}
            className="project-card-special group h-[320px] w-full sm:w-[45%] md:w-[45%] lg:w-[35%] relative overflow-hidden shadow-black shadow-2xl bg-gradient-to-l from-green-300 to-green-500"
          >
            <img
              src="/images/PrepPro.png"
              alt="Project"
              className="w-full h-full px-8 py-5 object-cover transition-transform duration-300 group-hover:scale-105 shadow-xl shadow-green-200"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                View Project
              </span>
            </div>
          </a>

          {/* HISTORA */}
          <a
            href="https://github.com/Kashinath-Nelwade/Histora"
            target="_blank"
            className="project-card group h-[280px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%] relative overflow-hidden shadow-2xl bg-gradient-to-bl from-[#6A6255] to-amber-950 shadow-black"
          >
            <img
              src="/images/histora.png"
              alt="Project"
              className="w-full h-full px-8 py-5 object-cover transition-transform duration-300 group-hover:scale-105 shadow-[#302725] shadow-xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                View Project
              </span>
            </div>
          </a>

          {/* CODE REVIEWER */}
          <a
            href="https://github.com/Kashinath-Nelwade/Code-Reviewer"
            target="_blank"
            className="project-card-bottom group h-[300px] w-full sm:w-[45%] md:w-[45%] lg:w-[35%] relative overflow-hidden shadow-2xl bg-zinc-300 bg-gradient-to-tr from-zinc-200 to-zinc-700 shadow-black"
          >
            <img
              src="/images/review.png"
              alt="Project"
              className="w-full h-full px-8 py-4 object-cover transition-transform duration-300 group-hover:scale-105 shadow-xl shadow-zinc-900"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                View Project
              </span>
            </div>
          </a>

        </div>

        {/* See All Work Link */}
        <a href="https://www.linkedin.com/in/kashinath-nelwade/" target='_blank' rel="noopener noreferrer" className='flex flex-row justify-end items-center gap-1 font-bold py-16 px-4 w-full'>
          <h1 className='text-4xl font-[kashh1] text-white'>See all my work.</h1>
          <h1 className='text-6xl font-[kashh1] text-white'>➡️</h1>
        </a>

      </div>
    </div>
  )
}

export default Page4
