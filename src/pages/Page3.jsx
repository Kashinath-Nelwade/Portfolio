import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const developmentSkills = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'GSAP', logo: 'https://greensock.com/uploads/monthly_2020_03/gsap-greensock.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
]

const Page3 = () => {
  const skillRefs = useRef([])
  const titleRef = useRef(null)

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

    // 🔹 Skill boxes animation
    skillRefs.current.forEach((box) => {
      if (!box) return

      gsap.fromTo(
        box,
        {
          opacity: 0,
          scale: 0.5,
          y: 60,
          rotationX: -45,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: box,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          },
        }
      )
    })
  })

  return (
    <div className="bg-zinc-800 text-white p-4 sm:p-6 md:p-10 overflow-x-hidden min-h-screen">
      <div className="max-w-8xl mx-auto">

        {/*  Title */}
        <div className="mb-10 sm:mb-12 " ref={titleRef}>
          <h1 className="font-[kashh1] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-7xl tracking-tight">
            Things I'm <span className="text-cyan-400">good</span> at
          </h1>
          <p className="text-white font-bold text-base selection:bg-pink-400 sm:text-lg md:text-3xl tracking-tighter mt-8 py-2">
            skills, interests, passion and hobbies
          </p>
        </div>

        {/*  Skills */}
        <div className="mb-16 py-4 sm:py-8 md:py-10">
          <div className="inline-block border-2 border-white rounded-lg px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <h2 className="text-white text-lg sm:text-xl font-medium mb-5">
              development
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start pt-4 sm:pt-10 md:pt-12">
            {developmentSkills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillRefs.current[index] = el)}
                title={skill.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer p-3"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page3
