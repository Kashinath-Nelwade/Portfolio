import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    // 🔹 Header animation
    gsap.fromTo(
      "#page2 h3",
      
      { x: "100%", opacity: 1 },
      {
        x: "-80%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          start: "top 85%",
          end: "top -50%",
          scrub: 2,
        },
      }
    )

    // 🔹 Rotating and coming text animation
    gsap.utils.toArray(".rotateText").forEach((el) => {
      gsap.from(el, {
        rotationX: -75,
        // opacity: 0.5,
        opacity:0,
        color: "rgb(110, 92, 82)",
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          scroller: "body",
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
      })
    })
  })

  return (
    <div
      id="page2"
      className="text-white p-4 sm:p-6 md:p-10 overflow-x-hidden
      bg-[url(./assets/components/kashhh.png)] bg-black/40 bg-cover bg-center"
    >

      {/* 🔹 Moving header */}
      <h3 className="text-2xl pb-10 sm:text-3xl md:text-5xl lg:text-8xl  whitespace-nowrap text-zinc-400 text-center font-[kashh1] font-bold tracking-widest">
        Kashinath Nelwade | DSA and Development
      </h3>


     {/* main block and the text blocks  */}


    <div className='main_container  flex items-end gap-4 mt-16 pb-40 justify-end flex-col'>
    
      <div className="rotateText  sm:mt-24 md:mt-80  pt-24 sm:pt-10  md:pt-24 ">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1] ">
          Hi ! I’m Kashinath,
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
          <span className="text-[#dd9568]">Full Stack Web </span>Developer &
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
          Software Engineering student
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
          focused on building scalable,
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
           <span className='text-[#dd9568]'>web applications</span> with clean UI 
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw] md:text-[5vw]  tracking-tight font-bold font-[kashh1]">
          and efficient <span className="text-[#dd9568]">backend</span> systems.
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
          I love solving <span className="text-[#dd9568]">real-world problems</span>
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[5vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
          through code & continuously improving
        </h1>
      </div>

      <div className="rotateText">
        <h1 className="text-[5vw] sm:text-[4vw]  md:text-[5vw] tracking-tight font-bold font-[kashh1]">
         my skills by building <span className="text-[#dd9568]">projects</span> 
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[5vw]  sm:text-[4vw] md:text-[5vw] tracking-tight font-bold font-[kashh1]">
        and learning new <span className='text-[#dd9568]'>technologies</span>.
        </h1>
      </div>

      </div>

      {/* 🔹 Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 justify-end mt-14 sm:mt-20 pb-20">
        <a href="https://www.instagram.com/kashinathnelwade/" target="_blank" rel="noopener noreferrer" className="px-2 sm:px-6 py-4 sm:py-5  bg-black/5  text-center border-2 border-white font-bold text-white cursor-pointer rounded-full">
          Say Hi 👋
        </a>

        {/* github repo */}

        <a href='https://github.com/Kashinath-Nelwade' rel='noopener noreferrer' target="_blank" className="px-2 sm:px-6 py-4 sm:py-5 bg-black/5 text-center content-center   border-2 border-white font-bold cursor-pointer text-white  rounded-full flex items-center justify-center gap-2">
          Watch my Repo
          <img className='w-6 h-6 ' src="images/github.png" alt="" />
        </a>
      </div>

    </div>
  )
}

export default Page2
